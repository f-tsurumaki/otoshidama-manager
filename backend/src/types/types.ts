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