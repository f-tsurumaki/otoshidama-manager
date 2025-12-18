import BalanceCard from "@/components/balance/BalanceCard";
import TransactionList from "@/components/transactions/TransactionList";

export default function Home() {
  return (
    <main className="p-8">
      <BalanceCard />
      <TransactionList />
    </main>
  );
}
