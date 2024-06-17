import express from 'express';
import passport from 'passport';
import checkBlacklist from '../middlewares/checkBlacklist.js';
import { createUser, getUser, getUserQuestions } from '../controllers/userController.js';
const router = express.Router();

router.post('/register', createUser);
router.get('/:userId', passport.authenticate('jwt', { session: false }), checkBlacklist, getUser);
router.get('/:userId/questions', passport.authenticate('jwt', { session: false }), checkBlacklist, getUserQuestions);

export default router;
