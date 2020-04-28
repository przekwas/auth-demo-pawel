import * as express from 'express';
import db from '../../db';
import { generateSalt } from '../../utils/passwords';
import { createToken } from '../../utils/tokens';

const router = express.Router();

router.post('/', async (req, res) => {

    const userDTO = req.body;

	try {
        userDTO.password = generateSalt(req.body.password);
        const { insertId } = await db.users.insert(userDTO);
        const token = await createToken({ userid: insertId, role: 'guest' });
        res.json({ role: 'guest', token });
    } catch (error) {
        console.log(error);
        res.status(500).json('my code sucks.');
    }
});

export default router;