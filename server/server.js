import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
const client = new MongoClient(URL);

const start = async () => {
  await client.connect();
  const coll = client.db('voin_studio').collection('clients');

  app.get('/', async (req, res) => {
    res.send(`Server work's`);
  });

  app.post('/api/contact', async (req, res) => {
    const info = req.body;
    console.log(info);

    await coll.insertOne(info);
    res.status(200).send(`Info Sended!`);
  });

  app.listen(PORT, console.log(`Server work's at ${PORT}`));
};

start();
