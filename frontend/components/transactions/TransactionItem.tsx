import { Transaction } from "@/types/transaction";

type Props = {
  transaction: Transaction;
  // ↑ 入出金明細「1件分」のデータ
};

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  // ↑ props.transaction を分割代入で直接使えるようにしている

  return (
    // 明細1件分なので li タグを使用
    <li className="flex items-center justify-between border rounded-md p-4 mb-2 bg-white">
      {/* 価値日 */}
      <div className="w-32 text-sm text-gray-500">{transaction.valueDate}</div>

      {/* 摘要 */}
      <div className="flex-1 font-medium">{transaction.remarks}</div>

      {/* 金額表示 */}
      <div className="w-32 font-bold text-right">
        {/* 
          amount は API 仕様で string 型なので、
          表示時だけ Number に変換している
        */}
        {/* toLocaleString() で 10000 → 10,000 のように表示 */}
        {Number(transaction.amount).toLocaleString()}円
      </div>
    </li>
  );
};

export default TransactionItem;
