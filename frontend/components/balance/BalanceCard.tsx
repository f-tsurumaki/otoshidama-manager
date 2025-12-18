'use client';

import { useEffect, useState } from "react";
import { Balance } from "@/types/balance";
import { fetchMainBalance, fetchSpBalance } from "@/components/balance/balance.api";


function BalanceCard() {
  const [mainBalance, setMainBalance] = useState<Balance[]>([]);
  const [spBalance, setSpBalance] = useState<Balance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const loadBalances = async () => {
        try {
          console.log('🔍 残高データの取得開始');
          setLoading(true);

          const [main, sp] = await Promise.all([
            fetchMainBalance(),
            fetchSpBalance()
          ]);

        console.log('✅ 通常口座データ:', main);
        console.log('✅ SP口座データ:', sp);

          setMainBalance(main);
          setSpBalance(sp);
        } catch (error) {
          console.error('残高情報の取得に失敗しました:', error);
        } finally {
          setLoading(false);
          console.log('🙌残高データの取得完了');
        }
      };
      loadBalances();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>残高情報の取得に失敗しました: {error}</div>;
    }

    if (mainBalance.length === 0) {
        return <div>残高情報がありません</div>;
    }

  return (
    <div>
      <ul>
        {mainBalance.map((account) => (
            <li key={account.accountId}>
                残高: {account.balance}円
            </li>
        ))}
    </ul>
    </div>
  );
}

export default BalanceCard;