import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import db from '../db';
import config from '../config';
import type { IPayload } from './interfaces';

export const createToken = async (payload: IPayload) => {
    payload.uniq = crypto.randomBytes(12).toString('hex');
    const { insertId } = await db.tokens.insert(payload);
    payload.tokenid = insertId;
    const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expires });
    await db.tokens.update(token, payload.tokenid);
    return token;
}