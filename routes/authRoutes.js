import express from 'express';
import { login, logout, refreshToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', passport.authenticate('jwt', { session: false }),logout);
router.post('/refresh', passport.authenticate('jwt', { session: false }),refreshToken);

export default router;
