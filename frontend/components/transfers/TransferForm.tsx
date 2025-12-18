"use client";

import { useState } from "react";
import { transferApi } from "./transfer.api";

export default function TransferForm({
  category,
  onConfirm,
}: {
  category: "お小遣い" | "投資" | "貯金";
  onConfirm?: (result: unknown) => void;
}) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result;
      if (category === "お小遣い") {
        result = await transferApi.pocketMoney(amount);
      } else if (category === "投資") {
        result = await transferApi.investment(amount);
      } else {
        result = await transferApi.savings(amount);
      }

      if (onConfirm) {
        onConfirm(result);
      }
      // ✅ 入力欄をリセット！
      setAmount("");
    } catch (err: unknown) {
      console.error("❌ Transfer error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h2 className="font-semibold">{category}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額を入力"
        step="100"
        min="0"
        className="border rounded-md p-2 w-full"
      />
      <button
        type="submit"
        disabled={!amount || loading}
        className="cursor-pointer border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black"
      >
        {loading ? "送金中..." : "振替"}
      </button>
    </form>
  );
}
