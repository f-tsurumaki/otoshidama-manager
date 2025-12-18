"use client";

import React, { useEffect, useState } from "react";
import { fetchAccounts } from "./accounts.api";
import { Account } from "@/types/account";

interface Props {
  index: number; // 取得したい子口座の番号（0からスタート）
}

/**
 * SubAccountNameコンポーネント
 * 指定されたindexの子口座名を表示する
 * 子口座が存在しない場合は "-" を表示
 */
const SubAccountName = ({ index }: Props) => {
  const [name, setName] = useState<string>("-"); // 初期値は "-"（データ未取得時）

  useEffect(() => {
    // APIから口座情報を取得
    const load = async () => {
      try {
        const res = await fetchAccounts();
        console.log("SubAccountName APIレスポンス:", res);

        const accountsData = res.data.accounts || [];
        const subAccountsData = res.data.subAccounts || [];

        // 親口座に子口座をまとめる
        const parentAccounts: Account[] = accountsData.map((acc) => ({
          ...acc,
          subAccounts: subAccountsData, // 全ての子口座を追加
        }));

        // 全ての子口座名を1つの配列にまとめる
        const subNames: string[] = [];
        parentAccounts.forEach((account) => {
          if (account.subAccounts && account.subAccounts.length > 0) {
            account.subAccounts.forEach((sub) =>
              subNames.push(sub.accountName)
            );
          } else {
            console.log(`親口座 "${account.accountName}" に子口座はありません`);
          }
        });

        // 指定されたindexの子口座名をセット、存在しなければ "-"
        setName(subNames[index] || "-");
        console.log(
          `SubAccountName [${index}] に表示する子口座名:`,
          subNames[index] || "-"
        );
      } catch (err) {
        console.error("SubAccountNameでの口座取得中にエラー:", err);
      }
    };

    load();
  }, [index]);

  return <span>{name}</span>;
};

export default SubAccountName;
