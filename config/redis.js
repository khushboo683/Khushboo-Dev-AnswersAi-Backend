import redis from 'redis';

const redisClient = redis.createClient();

redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

export default redisClient;
