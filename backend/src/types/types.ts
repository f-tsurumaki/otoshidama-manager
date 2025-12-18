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

export interface SPAccountBalance {
  accountId: string;
  odBalance: string;
  tdTotalBalance: string;
  fodTotalBalanceYenEquivalent: string;
  spAccountFcyBalances: any[];
}

export interface BalanceResponse {
  balances: Balance[];
  spAccountBalances: SPAccountBalance[];
}

// ===== 入出金明細（アプリで使う形） =====
export interface Transaction {
  valueDate: string; // 価値日
  amount: string; // 金額（API仕様で string）
  remarks: string; // 摘要
}

/** 振り分け口座（親口座） */
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

/** 振り分け口座（子口座） */
export interface SubAccountName {
  accountId: string;
  spAccountName: string;
}

export interface AccountsResponse {
  accounts: Account[]; // 親口座
  spAccounts: SubAccountName[]; // 子口座
}
