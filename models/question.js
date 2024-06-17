import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true }
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

export default Question;
