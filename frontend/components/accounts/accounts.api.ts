// components/accounts/accounts.api.ts
import { apiClient } from "@/lib/apiClient";
import { AccountsResponse } from "@/types/account";

/**
 * 親口座と子口座をまとめて取得
 */
export const fetchAccounts = async (): Promise<AccountsResponse> => {
  const response = await apiClient.get<AccountsResponse>("/accounts", {
    headers: { "Cache-Control": "no-cache" },
  });
  console.log(response);
  return response.data;
};
