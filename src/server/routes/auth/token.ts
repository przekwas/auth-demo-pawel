import * as express from 'express';
import * as passport from 'passport';

const router = express.Router();

router.get('/', passport.authenticate('jwt'), (req, res) => res.sendStatus(200));

export default router;