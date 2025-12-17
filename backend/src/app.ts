import express, { Request, Response } from 'express';
import router from './balance/balance.routes';

const app = express();

// ルーティング
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

export default app;
