// types/account.ts
export interface SubAccountName {
  accountId: string;
  accountName: string; // バックエンドの field 名に合わせる
}

export interface Account {
  accountId: string;
  accountName: string;
  subAccounts?: SubAccountName[];
}

export interface AccountsResponse {
  data: {
    accounts: Account[];
    subAccounts: SubAccountName[];
  };
}
