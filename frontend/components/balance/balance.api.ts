import { apiClient } from '@/lib/apiClient';
import { Balance, BalanceResponse, ApiResponse} from '@/types/balance';

export const fetchBalance = async ():Promise<BalanceResponse> => {
    const response = await apiClient.get<ApiResponse<BalanceResponse>>('/accounts/balance');

    if (!response.data.success) {
        throw new Error('残高情報の取得に失敗しました');
    }

    return response.data.data;
};

export const fetchMainBalance = async () : Promise<Balance[]> => {
    const data = await fetchBalance();
    return data.balance;
};

export const fetchSpBalance = async () : Promise<Balance[]> => {
    const data = await fetchBalance();
    return data.spBalance;
};