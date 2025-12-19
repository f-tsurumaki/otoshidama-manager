export default function TransferConfirm({ result }: { result: any }) {
  return (
    <div>
      <h2>振替結果</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
