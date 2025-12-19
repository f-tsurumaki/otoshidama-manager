import { apiClient } from "@/lib/apiClient";
import { TransferResponse } from "@/types/transfer";

export const transferApi = {
  pocketMoney: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>(
      "/api/transfers/pocket-money",
      {
        paymentAmount: amount,
      }
    );
    return res.data;
  },
  investment: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>(
      "/api/transfers/investment",
      {
        paymentAmount: amount,
      }
    );
    return res.data;
  },
  savings: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>(
      "/api/transfers/savings",
      {
        paymentAmount: amount,
      }
    );
    return res.data;
  },
};
