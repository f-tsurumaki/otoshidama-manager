import { Request, Response,NextFunction } from 'express';
import { getBalance } from './balance.service';

export const fetchBalance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const balance = await getBalance();

    res.status(200).json({
      success: true,
      data: balance
    });

  } catch (error) {
    next(error);
  }
};