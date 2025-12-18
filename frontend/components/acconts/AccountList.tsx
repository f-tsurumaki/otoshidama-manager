"use client"; // appディレクトリ内でuseEffectなどを使う場合は必要

import { useEffect, useState } from "react";
import { Account } from "@/types/account";
import { getAccounts } from "./accounts.api";

const AccountList = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Failed to fetch accounts", error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <h1>口座一覧</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.accountId}>
            {account.accountName}
            {account.subAccounts && (
              <ul>
                {account.subAccounts.map((sub) => (
                  <li key={sub.accountId}>- {sub.accountName}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
