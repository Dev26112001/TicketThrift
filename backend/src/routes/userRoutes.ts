import express from 'express';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../helpers/authMiddleware';

const router = express.Router();
const userController = new UserController();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

export default router; 