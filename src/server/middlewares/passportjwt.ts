import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';
import config from '../config';
import db from '../db';
import type { IPayload } from '../utils/interfaces';
import { Request } from 'express';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
	new passportJwt.Strategy(
		{
			jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
			passReqToCallback: true,
			secretOrKey: config.jwt.secret
		},
		async (req: Request, jwt_payload: IPayload, done: passportJwt.VerifiedCallback) => {
			try {
				const [user] = await db.users.one(jwt_payload.userid);
				if (user) {
					delete user.password;
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (error) {
				console.log(error);
				done(error);
			}
		}
	)
);
