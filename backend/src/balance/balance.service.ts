import axios from "axios";

const API_URL = process.env.AOZORA_API_BASE_URL || '';
const ACCESS_TOKEN = process.env.AOZORA_ACCESS_TOKEN || '';


interface Balance {
  accountId: string;
  accountTypeCode: string;
  accountTypeName: string;
  balance: string;
  baseDate: string;
  baseTime: string;
  withdrawableAmount: string;
  previousDayBalance: string;
  previousMonthBalance: string;
  currencyCode: string;
  currencyName: string;
}


interface BalanceResponse {
    balances: Balance[];
}

export const fetchBalance = async (): Promise<BalanceResponse> => {
  try {
    console.log('🔍GMO API呼び出し開始');
    console.log('=== APIリクエスト情報 ===');
    console.log('URL:', `${API_URL}/personal/v1/accounts/balances`);
    console.log('AOZORA_ACCESS_TOKEN:', ACCESS_TOKEN);
    console.log('AOZORA_ACCESS_TOKEN length:', ACCESS_TOKEN?.length);
    console.log('========================');

    const response = await axios.get<BalanceResponse>(
      `${API_URL}/personal/v1/accounts/balances`,
      {
        headers: {
          'Accept': 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
          'x-access-token': ACCESS_TOKEN 
        }
      }
    );
    return response.data;
  } catch (error) {

    if (axios.isAxiosError(error)) {
      console.error('GMO API Axios Error:', error.response?.data);console.error('❌ GMO API Error:');
      console.error('ステータス:', error.response?.status);
      console.error('レスポンス:', error.response?.data);
      console.error('メッセージ:', error.message);
    } else {
        console.error('不明なエラーが発生しました:', error);
    }
    console.error('GMO API Error:', error);
    throw new Error('残高の取得に失敗しました');
  }
};
