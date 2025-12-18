"use client";

import { useState } from "react";
import { transferApi } from "./transfer.api";

export default function TransferForm({
  category,
  onConfirm,
}: {
  category: "pocketMoney" | "investment" | "savings";
  onConfirm?: (result: unknown) => void;
}) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result;
      if (category === "pocketMoney") {
        result = await transferApi.pocketMoney(amount);
      } else if (category === "investment") {
        result = await transferApi.investment(amount);
      } else {
        result = await transferApi.savings(amount);
      }

      if (onConfirm) {
        onConfirm(result);
      }
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
        className="border rounded-md p-2 w-full"
      />
      <button
        type="submit"
        disabled={!amount || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
      >
        {loading ? "送金中..." : "送金"}
      </button>
    </form>
  );
}
