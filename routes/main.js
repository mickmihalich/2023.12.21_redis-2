import express from 'express';
const router = express.Router();




//connect to Redis
import { createClient } from 'redis';

const client = await createClient({
  url: 'redis://default:default@10.10.33.132:6379'  
})
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

await client.set('title', 'BD Redis');
const value = await client.get('title');
await client.disconnect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: value });
});

export default router;
