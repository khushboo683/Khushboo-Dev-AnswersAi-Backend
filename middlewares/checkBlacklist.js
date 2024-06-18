import redisClient from '../config/redis.js';

const checkBlacklist = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const isBlacklisted = await redisClient.get(token);
    if (isBlacklisted) { //if token is blacklisted
      return res.status(401).json({ message: 'Token is blacklisted' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default checkBlacklist;
