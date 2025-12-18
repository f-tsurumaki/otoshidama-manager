import { Transaction } from "@/types/transaction";

type Props = {
  transaction: Transaction;
  // ↑ 入出金明細「1件分」のデータ
};

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  // ↑ props.transaction を分割代入で直接使えるようにしている

  return (
    // 明細1件分なので li タグを使用
    <li className="border-b py-2">
      {/* 価値日 */}
      <div className="text-sm text-gray-500">{transaction.valueDate}</div>

      {/* 摘要 */}
      <div className="font-medium">{transaction.remarks}</div>

      {/* 金額表示 */}
      <div className="font-bold">
        {/* 
          amount は API 仕様で string 型なので、
          表示時だけ Number に変換している
        */}
        {/* toLocaleString() で 10000 → 10,000 のように表示 */}¥
        {Number(transaction.amount).toLocaleString()}
      </div>
    </li>
  );
};

export default TransactionItem;
