"use client";

import { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";
import { fetchTransactions } from "./transactions.api";
import { Transaction } from "@/types/transaction";

// TransactionList コンポーネント
// ・APIから入出金明細一覧を取得する
// ・取得したデータを一覧表示する（親コンポーネント）
const TransactionList: React.FC = () => {
  // 入出金明細の一覧データを保持する state
  // 初期値は空配列
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // データ取得中かどうかを管理する state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 初回レンダリング時に実行される処理
  // 第二引数が [] のため「1回だけ」実行される
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        // backend API を呼び出して入出金明細を取得
        const data = await fetchTransactions();

        // 取得したデータを state に保存
        setTransactions(data);
      } catch {
        setError("取引データの取得に失敗しました");
      } finally {
        // 成功・失敗に関わらずローディング終了
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  if (loading) return <p>読み込み中...</p>;

  // エラーがある場合はエラーメッセージを表示
  if (error) return <p className="text-red-500">{error}</p>;

  // 正常にデータが取得できた場合の表示
  return (
    <ul>
      {transactions.map((tx, index) => (
        <TransactionItem key={index} transaction={tx} />
      ))}
    </ul>
  );
};

export default TransactionList;
