"use client";

import { useEffect, useState } from "react";
import AccountItem from "./AccountItem";
import { fetchAccounts } from "@/components/accounts/accounts.api";
import { Account } from "@/types/account";

// AccountListコンポーネント：APIから口座情報を取得して親口座＋子口座をリスト表示
const AccountList: React.FC = () => {
  // 状態管理：口座データ、読み込み中フラグ、エラー
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // APIから口座データを取得
    const loadAccounts = async () => {
      try {
        const response = await fetchAccounts();
        console.log("APIから取得した生データ:", response);

        // バックエンドは data 配下に accounts / subAccounts がある想定
        const accountsData = response.data.accounts || [];
        const subAccountsData = response.data.subAccounts || [];

        // 親口座に子口座を追加（ここではシンプルに全ての子口座を追加）
        const parentAccounts: Account[] = accountsData.map((acc) => ({
          ...acc,
          subAccounts: subAccountsData, // 子口座をそのまま追加
        }));

        console.log("親口座に子口座を追加した結果:", parentAccounts);

        setAccounts(parentAccounts);
      } catch (err: unknown) {
        console.error("口座情報取得中にエラーが発生:", err);
        setError("口座情報の取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    loadAccounts();
  }, []);

  // 読み込み中はメッセージを表示
  if (loading) return <p>読み込み中...</p>;

  // エラーがあれば赤文字で表示
  if (error) return <p className="text-red-500">{error}</p>;

  // 取得した口座リストを AccountItem コンポーネントで表示
  return (
    <ul>
      {accounts.map((account) => (
        <AccountItem
          key={account.accountId || account.accountName} // IDがない場合は名前をキーに
          account={account}
        />
      ))}
    </ul>
  );
};

export default AccountList;
