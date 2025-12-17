import { sunabarClient } from "../common/sunabarClient";

export const getTransactions = async () => {
  try {
    const response = await sunabarClient.get("/v1/accounts/transactions", {
      params: {
        accountId: process.env.AOZORA_ACCOUNT_ID,
        dateFrom: "2024-03-24",
        dateTo: "2025-12-16",
        nextItemKey: 0,
      },
    });

    // デバッグ用
    console.log("Request URL:", response.config.url);
    console.log("Request Headers:", response.config.headers);

    return response.data;
  } catch (error: any) {
    console.error("Error data:", error.response?.data);
    console.error("Error status:", error.response?.status);
    throw error;
  }
};
