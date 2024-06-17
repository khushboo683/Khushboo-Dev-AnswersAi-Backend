import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import redisClient from '../config/redis.js';

export const login = async (req, res) => {
  try {
    console.log("login", req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ password: 'Incorrect password' });
    }

    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token: `Bearer ${token}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const logout = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    // Blacklist the token
    await redisClient.set(token, 'blacklisted', { EX: 3600 }); // Set token to expire after 1 hour
    res.json({ message: 'Successfully logged out' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal server error' });
  }
};

export const refreshToken = async (req, res) => {
  const { token } = req.body;

  try {
    const isBlacklisted = await redisClient.get(token);
    if (isBlacklisted) {
      return res.sendStatus(403).json({ message: 'Token is blacklisted' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token: newToken });
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ message: 'Internal server error' });
  }
};
