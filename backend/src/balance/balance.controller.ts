import { Request, Response } from 'express';
import { fetchBalance } from './balance.service';

export const getBalance = async (req: Request, res: Response) => {
  try {
    const balance = await fetchBalance();
    res.status(200).json({
      success: true,
      data: balance
    });

  } catch (error) {
    console.error('Balance Controller Error:', error);
    res.status(500).json({ 
      success: false,
      error: '残高の取得に失敗しました'
    });
  }
};
