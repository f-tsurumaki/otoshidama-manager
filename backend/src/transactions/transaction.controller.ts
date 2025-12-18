import { Request, Response } from "express";
import { getTransactions } from "./transaction.service";

export const testFetchTransactions = async (_req: Request, res: Response) => {
  try {
    // getTransactions() を呼んで銀行APIから入出金明細を取得
    const data = await getTransactions();
     // 正常に取得できた場合、取得データを JSON でレスポンスとして返す
    res.json(data);
  } catch (error: any) {
    res.status(Number(error.errorCode) || 500).json({
      errorCode: error.errorCode,
      errorMessage: error.errorMessage,
    });
  }
};
