import { sunabarClient } from "../common/sunabarClient";
import { BalanceResponse } from "../types/types";

export const getBalance = async (): Promise<BalanceResponse> => {

  console.log('🔍GMO API呼び出し開始');
  const response = await sunabarClient.get<BalanceResponse>(
    "/personal/v1/accounts/balances"
  );
  console.log('✅ API呼び出し成功:', response.data);
  return response.data;
  };
