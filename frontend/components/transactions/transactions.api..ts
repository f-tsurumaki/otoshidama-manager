import axios from "axios";

//入出金明細1件分の型
export interface Transaction {
  valueDate: string;
  amount: string;
  remarks: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
/**
 * 入出金明細一覧を取得する関数
 * frontend から backend の /transactions API を呼び出す
 */
export const fetchTransactions = async (): Promise<Transaction[]> => {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }
  // backend の API に GET リクエストを送信
  const response = await axios.get<Transaction[]>(
    `${API_BASE_URL}/transactions`
  );
  // API から返ってきたデータ（Transaction[]）をそのまま返却
  return response.data;
};
