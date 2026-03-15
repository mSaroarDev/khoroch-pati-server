import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDbConnection } from './configs/dbconfig.config.js';

dotenv.config();
const app = express();

await initDbConnection();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Hey, What are you doing here 🤨?' });
});

export default app;
