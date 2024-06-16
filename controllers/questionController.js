const Question = require('../models/question');
const User = require('../models/user');
const { getLangChainResponse } = require('../config/langchain')

exports.createQuestion = async (req, res) => {
  const { question } = req.body;
  const response = await getLangChainResponse(question);
  console.log("response",response)
  const newQuestion = new Question({ userId: req.user.id, question, answer });
  await newQuestion.save();
  const user = await User.findById(req.user.id);
  user.questions.push(newQuestion._id);
  await user.save();
  res.status(201).json(newQuestion);
};

exports.getQuestion = async (req, res) => {
  const question = await Question.findById(req.params.questionId);
  res.json(question);
};
