import express from 'express';
import passport from 'passport';
import checkBlacklist from '../middlewares/checkBlacklist.js';
import { createQuestion, getQuestion } from '../controllers/questionController.js';

const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), checkBlacklist, createQuestion);
router.get('/:questionId', passport.authenticate('jwt', { session: false }), checkBlacklist, getQuestion);

export default router;
