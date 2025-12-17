import { Request, Response } from 'express';
import { getTransactions } from './transaction.service';

export const testFetchTransactions = async (_req: Request, res: Response) => {
  try {
    const data = await getTransactions();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
