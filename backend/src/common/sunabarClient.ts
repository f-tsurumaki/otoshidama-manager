// あおぞら銀行API用 axios クライアント
import axios from "axios";

export const sunabarClient = axios.create({
  baseURL: process.env.AOZORA_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json;charset=UTF-8",
    "x-access-token": process.env.AOZORA_ACCESS_TOKEN, // ← ここを変更
  },
});
