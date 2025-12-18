import { Request, Response,NextFunction } from 'express';
import { getBalance } from './balance.service';

export const fetchBalance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const balance = await getBalance();

    console.log('=== Controller デバッグ ===');
    console.log('data:', balance);
    console.log('data.balances:', balance.balances);
    console.log('data.balances type:', typeof balance.balances);
    console.log('data.balances is array?:', Array.isArray(balance.balances));
    console.log('data.spAccountBalances:', balance.spAccountBalances);  
    console.log('data.spAccountBalances type:', typeof balance.spAccountBalances);  
    console.log('data.spAccountBalances is array?:', Array.isArray(balance.spAccountBalances));  
    console.log('===========================');

    if (!balance.balances || !Array.isArray(balance.balances)) {
      console.error('❌ data.balances が配列ではありません:', balance.balances);
      throw new Error('通常口座データの取得に失敗しました');
    }

    if (!balance.spAccountBalances || !Array.isArray(balance.spAccountBalances)) {
      console.error('❌ data.spAccountBalances が配列ではありません:', balance.spAccountBalances);
      throw new Error('SP口座データの取得に失敗しました');
    }

    const balanceData = balance.balances.map(account => ({
      accountId: account.accountId,
      balance: account.balance
    }));

    const spBalances = balance.spAccountBalances.map(account => ({
      accountId: account.accountId,
      balance: account.odBalance
    }));

    res.status(200).json({
      success: true,
      data: {
        balance: balanceData,
        spBalance: spBalances
      }});

  } catch (error) {
    next(error);
  }
};

