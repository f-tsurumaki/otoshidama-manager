"use client";

import { useEffect, useState } from "react";
import AccountItem from "./AccountItem";
import { fetchAccounts } from "@/components/accounts/accounts.api";
import { Account } from "@/types/account";

const AccountList: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetchAccounts();
        console.log("API raw response:", response);

        // バックエンドは data 配下に accounts / subAccounts がある
        const accountsData = response.data.accounts || [];
        const subAccountsData = response.data.subAccounts || [];

        // 親口座に子口座を追加（シンプルに全て追加）
        const parentAccounts: Account[] = accountsData.map((acc) => ({
          ...acc,
          subAccounts: subAccountsData, // そのまま追加
        }));

        setAccounts(parentAccounts);
      } catch (err: unknown) {
        console.error("fetchAccounts error:", err);
        setError("口座情報の取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    loadAccounts();
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ul>
      {accounts.map((account) => (
        <AccountItem
          key={account.accountId || account.accountName}
          account={account}
        />
      ))}
    </ul>
  );
};

export default AccountList;
