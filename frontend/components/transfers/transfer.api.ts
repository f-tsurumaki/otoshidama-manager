// frontend/components/transfers/transfer.api.ts
import { apiClient } from "@/lib/apiClient";
import { TransferRequest, TransferResponse } from "@/types/transfer";

export const transferApi = {
  pocketMoney: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>(
      "/transfers/pocket-money",
      { amount } as TransferRequest
    );
    return res.data;
  },

  investment: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>(
      "/transfers/investment",
      { amount } as TransferRequest
    );
    return res.data;
  },

  savings: async (amount: string) => {
    const res = await apiClient.post<TransferResponse>("/transfers/savings", {
      amount,
    } as TransferRequest);
    return res.data;
  },
};
