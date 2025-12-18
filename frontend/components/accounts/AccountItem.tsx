"use client";

import React from "react";
import { Account } from "@/types/account";

// AccountItemコンポーネント：親口座とその子口座をリスト表示するためのコンポーネント
const AccountItem: React.FC<{ account: Account }> = ({ account }) => {
  // コンポーネントがレンダリングされるときに親口座と子口座の情報を確認
  console.log("AccountItemレンダリング:", account);

  const parentName = account.accountName;

  // 子口座が存在する場合は名前を配列にして取得、なければ空配列
  const subNames = account.subAccounts?.map((sub) => sub.accountName) || [];
  if (!account.subAccounts) {
    console.log("子口座は存在しません");
  }

  return (
    <li className="border rounded-md p-2 mb-2 bg-white">
      {/* 親口座表示 */}
      <div className="font-bold">{parentName}</div>

      {/* 子口座表示 */}
      <ul className="ml-4 list-disc">
        {subNames.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </li>
  );
};

export default AccountItem;
