import { sunabarClient } from "../common/sunabarClient";
import { Transaction } from "../types/types";
import { config } from "../common/config";

export const getTransactions = async (): Promise<Transaction[]> => {
  console.log("🔍 GMO 入出金明細API 呼び出し開始");
  try {
    const response = await sunabarClient.get(
      "/personal/v1/accounts/transactions",
      {
        params: {
          accountId: config.aozora.accountId,
          dateFrom: "2024-03-24",
          dateTo: "2025-12-16",
          nextItemKey: "0",
        },
      }
    );
    console.log("✅ GMO 入出金明細API 呼び出し成功");

    // アプリで使う形に変換
    return response.data.transactions.map((tx: any) => ({
      valueDate: tx.valueDate,
      amount: tx.amount,
      remarks: tx.remarks,
    }));
  } catch (error: any) {
    // service では「失敗した」事実だけ投げる
    throw error;
  }
};
