import TransferForm from "@/components/transfers/TransferForm";

export default function Home() {
  return (
    <main>
      <h1>振り分け登録</h1>
      <TransferForm category="pocketMoney" />
      <TransferForm category="investment" />
      <TransferForm category="savings" />
    </main>
  );
}
