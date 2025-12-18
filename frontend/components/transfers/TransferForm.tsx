import { useState } from "react";
import { transferApi } from "./transfer.api";

export default function TransferForm({
  onConfirm,
}: {
  onConfirm: (result: any) => void;
}) {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await transferApi.pocketMoney(amount);
      onConfirm(result); // 確認画面へ渡す
    } catch (err: any) {
      console.error("❌ Transfer error:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
