// HTTP制御
import { Request, Response, NextFunction } from "express";
import { getAccounts } from "./account.service";

/**
 * 口座一覧取得
 */
export const fetchAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await getAccounts();

    res.status(200).json({
      result: "success",
      accounts,
    });
  } catch (error) {
    next(error);
  }
};
