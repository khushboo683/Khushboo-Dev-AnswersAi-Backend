const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkBlacklist = require('../middlewares/checkBlacklist');
const {createQuestion, getQuestion} = require('../controllers/questionController');

router.post('/', passport.authenticate('jwt', { session: false }), checkBlacklist, createQuestion);
router.get('/:questionId', passport.authenticate('jwt', { session: false }), checkBlacklist, getQuestion);

module.exports = router;
