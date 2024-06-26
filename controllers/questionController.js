import Question from '../models/question.js';
import User from '../models/user.js';
import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from "dotenv";
  dotenv.config();
const chatModel = new ChatOpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const createQuestion = async (req, res) => {
  const { question } = req.body;
  // Calls out to the model's (OpenAI's) endpoint passing the prompt.
  const result = await chatModel.invoke(question);
  const answer = result.content
  const newQuestion = new Question({ userId: req.user.id, question, answer: answer });
  await newQuestion.save();
  const user = await User.findById(req.user.id);
  user.questions.push(newQuestion._id);
  await user.save();
  res.status(201).json(newQuestion);
};

export const getQuestion = async (req, res) => {
  const question = await Question.findById(req.params.questionId);
  res.json(question);
};
