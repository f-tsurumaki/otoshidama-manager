import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './balance/balance.routes';

dotenv.config();

const app = express();
const PORT = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});