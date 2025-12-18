import { apiClient } from "@/lib/apiClient";
import { Transaction } from "@/types/transaction";

/**
 * 入出金明細一覧を取得
 */
export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await apiClient.get<Transaction[]>("/transactions");
  return response.data;
};
