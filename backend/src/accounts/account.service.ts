// 銀行APIを呼ぶ
import { sunabarClient } from "../common/sunabarClient";

/**
 * 口座一覧取得
 */
export const getAccounts = async () => {
  const response = await sunabarClient.get("/accounts");

  return response.data;
};
