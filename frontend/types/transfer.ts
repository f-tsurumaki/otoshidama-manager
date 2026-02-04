export type TransferCategory = "pocketMoney" | "investment" | "savings";

export interface TransferRequest {
  amount: string;
}

export interface TransferResponse {
  result: string;
  message?: string;
}
