"use client";

import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";
import { fetchTransactions, Transaction } from "./transactions.api.";

/**
 * TransactionList
 * ・APIから入出金明細一覧を取得
 * ・取得したデータを TransactionItem に渡して表示
 */
const TransactionList: React.FC = () => {
  // 入出金明細の一覧を保持する state
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // ローディング状態
  const [loading, setLoading] = useState(true);
  // エラーメッセージ
  const [error, setError] = useState<string | null>(null);

  /**
   * 初回レンダリング時にAPIを呼ぶ
   */
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        // backend API 呼び出し
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        console.error(err);
        setError("取引データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  // ローディング中
  if (loading) {
    return <p>読み込み中...</p>;
  }

  // エラー発生時
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <ul>
      {transactions.map((tx, index) => (
        // 一覧表示なので key が必要
        <TransactionItem key={index} transaction={tx} />
      ))}
    </ul>
  );
};

export default TransactionList;
