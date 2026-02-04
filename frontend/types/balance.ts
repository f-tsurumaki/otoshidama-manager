export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    message: string;
  };
}

export interface Balance {
  accountId: string;
  balance: string;
};

export interface SpBalance {
  accountId: string;
  balance: string;
}

export interface BalanceResponse {
  balance: Balance[];
  spBalance: Balance[];
};

