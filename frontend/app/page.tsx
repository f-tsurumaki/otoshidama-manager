import TransferForm from "@/components/transfers/TransferForm";

export default function Home() {
  return (
    <main>
      <h1>振り分け登録</h1>
      <TransferEntry category="pocketMoney" />
      <TransferEntry category="investment" />
      <TransferEntry category="savings" />
    </main>
  );
}
