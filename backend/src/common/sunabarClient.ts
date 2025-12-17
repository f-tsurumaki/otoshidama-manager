import axios from "axios";
import { config } from "./config";

export const sunabarClient = axios.create({
  baseURL: config.aozora.apiURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json;charset=UTF-8",
    "x-access-token": config.aozora.accessToken,
  },
});
