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
    console.log("🚀 executeTransfer payload:", {
      depositSpAccountId,
      debitSpAccountId,
      paymentAmount,
    });
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
      if (error instanceof Error) {
        console.error("❌ Transfer API error:", error.message);
      } else {
        console.error("❌ Transfer API error:", error);
      }
      throw new Error("Failed to execute transfer");
    }
  },

  // お小遣い振替
  async transferPocketMoney(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: process.env.POCKETMONEY_ACCOUNT_ID!,
      debitSpAccountId: process.env.PARENT_ACCOUNT_ID!,
      paymentAmount: amount,
    });
  },

  // 投資振替
  async transferInvestment(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: process.env.INVESTMENT_ACCOUNT_ID!,
      debitSpAccountId: process.env.PARENT_ACCOUNT_ID!,
      paymentAmount: amount,
    });
  },

  // 貯金振替
  async transferSavings(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: process.env.SAVINGS_ACCOUNT_ID!,
      debitSpAccountId: process.env.PARENT_ACCOUNT_ID!,
      paymentAmount: amount,
    });
  },
};
