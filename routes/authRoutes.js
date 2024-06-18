import express from 'express';
import passport from 'passport';
import checkBlacklist from '../middlewares/checkBlacklist.js';
import { login, logout, refreshToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', passport.authenticate('jwt', { session: false }),logout);
router.post('/refresh', passport.authenticate('jwt', { session: false }),checkBlacklist,refreshToken);

export default router;
