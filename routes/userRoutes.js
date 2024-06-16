const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkBlacklist = require('../middlewares/checkBlacklist');
const {createUser, getUser, getUserQuestions} = require('../controllers/userController');

router.post('/register', createUser);
router.get('/:userId', passport.authenticate('jwt', { session: false }), checkBlacklist, getUser);
router.get('/:userId/questions', passport.authenticate('jwt', { session: false }), checkBlacklist, getUserQuestions);

module.exports = router;
