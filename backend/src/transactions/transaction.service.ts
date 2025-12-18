import { sunabarClient } from "../common/sunabarClient";

export const getTransactions = async () => {
  try {
    const response = await sunabarClient.get("/personal/v1/accounts/transactions", {
      params: {
        accountId: process.env.AOZORA_ACCOUNT_ID,
        dateFrom: "2024-03-24",
        dateTo: "2025-12-16",
        nextItemKey: "0",
      },
    });

    // 必要なデータだけ抽出
    return response.data.transactions.map((tx: any) => ({
      valueDate: tx.valueDate,
      amount: tx.amount,
      remarks: tx.remarks,
    }));

  } catch (error: any) {
    const status = error.response?.status;
    const data = error.response?.data;

    // 開発用ログ
    console.error("🔴Error status:", status);
    console.error("🔴Error data:", data);
    console.error("🔴Request URL:", error.config?.url);
    console.error("🔴Request params:", error.config?.params);

    // ステータスコード別メッセージ
    const messageMap: Record<number, string> = {
      400: "リクエストが不正です（パラメータなどを確認してください）",
      401: "認証エラーです（トークンを確認してください）",
      403: "権限がありません（アカウントIDやサンドボックス制限を確認）",
      404: "リクエスト先が存在しません（URLを確認してください）",
      500: "サーバ内部エラーです",
      504: "サーバ応答がタイムアウトしました",
    };

    throw {
      errorCode: status?.toString() || "500",
      errorMessage: messageMap[status!] || data?.message || "許可されていない、または不明なエラー",
    };
  }
};
