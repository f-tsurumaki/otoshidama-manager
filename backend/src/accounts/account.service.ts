// 銀行APIを呼ぶ
import { sunabarClient } from "../common/sunabarClient";

export const getAccounts = async () => {
  try {
    const response = await sunabarClient.get("/personal/v1/accounts");
    console.log("API Response:", response.data);
    return response.data;
  } catch (err: any) {
    console.error("API Error:", err.response?.data || err.message);
    throw err;
  }
};
