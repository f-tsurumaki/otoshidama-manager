// src/accounts/account.service.ts
import { sunabarClient } from "../common/sunabarClient";
import { AccountsResponse } from "../types/types";

export const getAccounts = async (): Promise<AccountsResponse> => {
  console.log("🔍GMO API呼び出し開始");
  const response = await sunabarClient.get<AccountsResponse>(
    "/personal/v1/accounts"
  );
  console.log("✅ API呼び出し成功:", response.data);
  return response.data;
};
