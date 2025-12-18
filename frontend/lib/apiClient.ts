import axios from "axios";
import { config } from "./config";

const apiClient = axios.create({
  baseURL: config.apiUrl,
  timeout: 5000,
    headers: {
    'Content-Type': 'application/json',
    }
});

export { apiClient };