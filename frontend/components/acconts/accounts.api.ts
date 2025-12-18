// api/accounts.api.ts
import apiClient from "@/lib/apiClient";
import { Account } from "@/types/account";

export const getAccounts = async (): Promise<Account[]> => {
  const response = await apiClient.get("/accounts");
  return response.data.accounts; // APIの返却形式に応じて調整
};
