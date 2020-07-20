import * as express from 'express';
import registerRouter from './register';
import loginRouter from './login';
import tokenRouter from './token';

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/token', tokenRouter);

export default router;