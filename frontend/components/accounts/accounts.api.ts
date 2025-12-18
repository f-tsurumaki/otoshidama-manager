// components/accounts/accounts.api.ts
import { apiClient } from "@/lib/apiClient";
import { AccountsResponse } from "@/types/account";

/**
 * fetchAccounts
 * 親口座と子口座をまとめて取得するAPI関数
 * 戻り値は AccountsResponse 型（accounts と subAccounts を含む）
 */
export const fetchAccounts = async (): Promise<AccountsResponse> => {
  // APIリクエストを送信。Cache-Control:no-cache で最新情報を取得
  const response = await apiClient.get<AccountsResponse>("/accounts", {
    headers: { "Cache-Control": "no-cache" },
  });

  // APIの生レスポンスを確認（開発中のみ）
  console.log("APIレスポンス:", response);

  // 実際に使うデータ部分のみ返す
  return response.data;
};
