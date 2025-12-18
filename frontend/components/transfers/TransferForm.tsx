import { useState } from "react";
import { transferApi } from "./transfer.api";

export default function TransferForm({
  category,
  onConfirm,
}: {
  category: "pocketMoney" | "investment" | "savings";
  onConfirm: (result: unknown) => void;
}) {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // category に応じて API を呼び分ける
      let result;
      if (category === "pocketMoney") {
        result = await transferApi.pocketMoney(amount);
      } else if (category === "investment") {
        result = await transferApi.investment(amount);
      } else {
        result = await transferApi.savings(amount);
      }

      function isError(err: unknown): err is Error {
        return err instanceof Error;
      }
      onConfirm(result); // 確認画面へ渡す
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("❌ Transfer error:", err.message);
      } else {
        console.error("❌ Transfer error:", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{category}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額を入力"
      />
      <button type="submit">送金</button>
    </form>
  );
}
