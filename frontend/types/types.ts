export interface Balance {
  accountId: string;
  balance: string;
};

export interface BalanceResponse {
  success: boolean;
  data: Balance[];
};