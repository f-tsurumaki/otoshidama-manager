import axios from "axios";
import { config } from "../common/config";

// 環境変数からベースURLとトークンを取得
const SUNABAR_BASE = `${config.aozora.apiURL}/personal/v1`;
const TOKEN = config.aozora.accessToken;

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
      if (error instanceof Error) {
        console.error("❌ Transfer API error:", error.message);
      } else {
        console.error("❌ Transfer API error:", error);
      }
      throw new Error("Failed to execute transfer");
    }
  },
  async transferPocketMoney(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: config.aozora.pocketMoneyAccountId,
      debitSpAccountId: config.aozora.parentAccountId,
      paymentAmount: amount,
    });
  },

  async transferInvestment(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: config.aozora.investmentAccountId,
      debitSpAccountId: config.aozora.parentAccountId,
      paymentAmount: amount,
    });
  },

  async transferSavings(amount: string) {
    return this.executeTransfer({
      depositSpAccountId: config.aozora.savingsAccountId,
      debitSpAccountId: config.aozora.parentAccountId,
      paymentAmount: amount,
    });
  },
};
