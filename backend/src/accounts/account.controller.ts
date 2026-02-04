// src/accounts/account.controller.ts
import { Request, Response, NextFunction } from "express";
import { getAccounts } from "./account.service";

export const fetchAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await getAccounts();

    console.log("=== Accounts Controller デバッグ ===");
    console.log("accounts:", accounts);
    console.log("accounts.accounts:", accounts.accounts);
    console.log("accounts.spAccounts:", accounts.spAccounts);
    console.log("====================================");

    if (!Array.isArray(accounts.accounts)) {
      throw new Error("親口座データの取得に失敗しました");
    }

    if (!Array.isArray(accounts.spAccounts)) {
      throw new Error("子口座データの取得に失敗しました");
    }

    // 親口座（名前だけ）
    const normalAccounts = accounts.accounts.map((account) => ({
      accountId: account.accountId,
      accountName: account.accountName,
    }));

    // 子口座（振り分け口座）
    const subAccounts = accounts.spAccounts.map((sp) => ({
      accountId: sp.accountId,
      accountName: sp.spAccountName,
    }));

    res.status(200).json({
      success: true,
      data: {
        accounts: normalAccounts,
        subAccounts,
      },
    });
  } catch (error) {
    next(error);
  }
};
