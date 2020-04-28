import * as express from 'express';
import blogsRouter from './blogs';

const router = express.Router();

router.use('/blogs', blogsRouter);

export default router;