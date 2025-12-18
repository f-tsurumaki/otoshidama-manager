"use client";

import React, { useEffect, useState } from 'react';
import { fetchSpBalance } from '@/components/balance/balance.api';

interface Props {
  index: number;
}

const SpAccountBalance = ({ index }: Props) => {
  const [balance, setBalance] = useState<string>("-");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const spBalances = await fetchSpBalance();
        console.log("SpAccountBalance APIレスポンス:", spBalances);

        const subAccount = spBalances[index];

        if (subAccount && subAccount.balance) {
          setBalance(Number(subAccount.balance).toLocaleString());
        } else {
          setBalance("-");
        }

        console.log(
          `SpAccountBalance [${index}] 残高:`,
          subAccount?.balance || "-"
        );
      } catch (err) {
        console.error("SpAccountBalanceでエラー:", err);
        setBalance("-");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [index]);

  if (loading) {
    return <span className="text-gray-400">...</span>;
  }

  return <span>: {balance}円</span>;
};

export default SpAccountBalance;