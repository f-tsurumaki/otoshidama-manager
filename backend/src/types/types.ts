export interface Balance {
  accountId: string;
  accountTypeCode: string;
  accountTypeName: string;
  balance: string;
  baseDate: string;
  baseTime: string;
  withdrawableAmount: string;
  previousDayBalance: string;
  previousMonthBalance: string;
  currencyCode: string;
  currencyName: string;
}

export interface BalanceResponse {
  balances: Balance[];
}

export interface Account {
  accountId: string;
  branchCode: string;
  branchName: string;
  accountTypeCode: string;
  accountTypeName: string;
  accountNumber: string;
  primaryAccountCode: string;
  primaryAccountCodeName: string;
  accountName: string;
  accountNameKana: string;
  currencyCode: string;
  currencyName: string;
  transferLimitAmount: string;
}

export interface AccountsResponse {
  accounts: Account[];
}
