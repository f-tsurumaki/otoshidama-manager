// あおぞら銀行API用 axios クライアント
import axios from "axios";

export const sunabarClient = axios.create({
  baseURL: process.env.AOZORA_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.AOZORA_ACCESS_TOKEN}`,
  },
});
