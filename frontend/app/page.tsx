import BalanceCard from "@/components/balance/BalanceCard";
import TransactionList from "@/components/transactions/TransactionList";
import TransferForm from "@/components/transfers/TransferForm";
import SubAccountName from "@/components/accounts/SubAccountName";
import SubAccountBalance from "@/components/balance/SpAccountBalance";

export default function Page() {
  return (
    // 画面全体のレイアウトを担当
    <main className="min-h-screen flex justify-center mt-12">
      <div className="w-full max-w-6xl p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold">＜銀行残高＞</h2>
          <li className="flex items-center justify-center border rounded-md p-4 mb-2 bg-white">
            <BalanceCard />
          </li>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold">＜振り分け明細＞</h2>
          <ul>
            <li>
              <SubAccountName index={1} />
              <SubAccountBalance index={1} /> 
            </li>
            <li>
              <SubAccountName index={2} /> 
              <SubAccountBalance index={2} /> 
            </li>
            <li>
              <SubAccountName index={3} />
              <SubAccountBalance index={3} />
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold">＜振り分け登録＞</h2>

          <div className="flex justify-between gap-4">
            <div className="flex-1 border rounded p-4 bg-purple-400 text-center text-white">
              <TransferForm category="お小遣い" />
            </div>
            <div className="flex-1 border rounded p-4 bg-pink-400 text-center text-white">
              <TransferForm category="投資" />
            </div>
            <div className="flex-1 border rounded p-4 bg-teal-400 text-center text-white">
              <TransferForm category="貯金" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold">＜入出金明細＞</h2>
          <TransactionList />
        </section>
      </div>
    </main>
  );
}
