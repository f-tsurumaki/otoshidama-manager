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