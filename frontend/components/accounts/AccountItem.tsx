import { Account } from "@/types/account";

type Props = {
  account: Account;
};

const AccountItem: React.FC<Props> = ({ account }) => {
  return (
    <li className="border-b py-2">
      {/* 親口座名 */}
      <div className="font-bold">{account.accountName}</div>

      {/* 子口座がある場合はネストで表示 */}
      {account.subAccounts && account.subAccounts.length > 0 && (
        <ul className="ml-4 mt-1">
          {account.subAccounts.map((sub) => (
            <li
              key={sub.accountId || sub.accountName}
              className="text-sm text-gray-600"
            >
              {sub.accountName} {/* spAccountName ではなく accountName */}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default AccountItem;
