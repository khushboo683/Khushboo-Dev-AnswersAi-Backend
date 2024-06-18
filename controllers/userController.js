import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user = new User({ name, email, password: hash });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const getUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json('User does not exist! Register first.');
        }
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getUserQuestions = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('questions');
        res.status(201).json(user.questions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
