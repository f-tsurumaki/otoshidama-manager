import React from "react";
import { Transaction } from "./transactions.api.";

/**
 * TransactionItem
 * ・入出金明細「1件」を表示するだけのコンポーネント
 * ・API通信や state は持たない（見た目専用）
 */
type Props = {
  transaction: Transaction;
};

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  return (
    <li className="border-b py-2">
      {/* 価値日 */}
      <div className="text-sm text-gray-500">
        {transaction.valueDate}
      </div>

      {/* 摘要 */}
      <div className="font-medium">
        {transaction.remarks}
      </div>

      {/* 金額 */}
      <div className="font-bold ">
        ¥{Number(transaction.amount).toLocaleString()}
      </div>
    </li>
  );
};

export default TransactionItem;

