import TransactionList from "@/components/transactions/TransactionList";

export default function Home() {
  return (
    // 画面全体のレイアウトを担当
    <main className="min-h-screen bg-zinc-50 flex justify-center">
      <div className="w-full max-w-6xl p-6">
        <section className="mb-6">
          <h2 className="text-xl font-bold">＜銀行残高＞</h2>
          <li className="flex items-center justify-between border rounded-md p-4 mb-2 bg-white"></li>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold">＜振り分け明細＞</h2>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold">＜振り分け登録＞</h2>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold">＜入出金明細＞</h2>
          <TransactionList />
        </section>
      </div>
    </main>
  );
}
