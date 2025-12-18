import TransactionList from "@/components/transactions/TransactionList";
import AccountList from "@/components/accounts/AccountList";

export default function Page() {
  return (
    <main className="p-8">
      <TransactionList />
      <AccountList />
    </main>
  );
}
