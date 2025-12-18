import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
// accounts 配下のルーティングを使うために router を import
import accountsRouter from "./accounts/account.routes";
import router from "./balance/balance.routes";
import transactionRouter from "./transactions/transaction.routes";


const app = express();

// JSON リクエストボディを扱えるようにする middleware
app.use(cors());
app.use(express.json());

// 口座一覧など accounts 関連 API を /accounts 配下で使えるようにする
app.use("/accounts", accountsRouter);

app.use("/transactions", transactionRouter); //取引明細関連

// ルーティング
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", router);

// ←ここからエラーハンドラーを追加
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ result: "error", message: err.message });
});

export default app;
