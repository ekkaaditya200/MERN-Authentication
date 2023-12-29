import express from 'express';
import {test, updateUser} from '../controllers/user_controller.js';
import { verifyToken } from '../utls/verifyUser.js';
const router = express.Router();

router.get('/',test);
router.post('/update/:id',verifyToken,updateUser);

export default router;