import axios from "axios";

// 環境変数からベースURLとトークンを取得
const SUNABAR_BASE = `${process.env.GMO_API_URL}/personal/v1`;
const TOKEN = process.env.GMO_ACCESS_TOKEN;

export const transferService = {
  async executeTransfer({
    depositSpAccountId,
    debitSpAccountId,
    paymentAmount,
  }: {
    depositSpAccountId: string;
    debitSpAccountId: string;
    paymentAmount: string;
  }) {
    try {
      const response = await axios.post(
        `${SUNABAR_BASE}/transfer/spaccounts-transfer`,
        {
          depositSpAccountId,
          debitSpAccountId,
          currencyCode: "JPY",
          paymentAmount,
        },
        {
          headers: {
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/json;charset=UTF-8",
            "x-access-token": TOKEN,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Transfer API error:", error);
      throw new Error("Failed to execute transfer");
    }
  },
};
