import dotenv from "dotenv";
dotenv.config();

export const config = {
  aozora: {
    apiURL: process.env.AOZORA_API_URL || "https://api.sunabar.gmo-aozora.com",
    accessToken: process.env.AOZORA_ACCESS_TOKEN || "",
    accountId: process.env.AOZORA_ACCOUNT_ID || "",
    parentAccountId: process.env.PARENT_ACCOUNT_ID || "", // SP付き形式
    pocketMoneyAccountId: process.env.POCKETMONEY_ACCOUNT_ID || "",
    investmentAccountId: process.env.INVESTMENT_ACCOUNT_ID || "",
    savingsAccountId: process.env.SAVINGS_ACCOUNT_ID || "",
  },
};

if (!config.aozora.accessToken) {
  console.warn("⚠️ AOZORA_ACCESS_TOKEN が設定されていません");
}
if (!config.aozora.accountId) {
  console.warn("⚠️ AOZORA_ACCOUNT_ID が設定されていません");
}
if (!config.aozora.parentAccountId) {
  console.warn("⚠️ PARENT_ACCOUNT_ID が設定されていません");
}
