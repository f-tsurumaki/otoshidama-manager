import { sunabarClient } from "../common/sunabarClient";
import { BalanceResponse } from "../types/types";

export const getBalance = async (): Promise<BalanceResponse> => {

    const response = await sunabarClient.get<BalanceResponse>(
      "/personal/v1/balances"
    );
    console.log('🔍GMO API呼び出し開始');
    return response.data;
  };
