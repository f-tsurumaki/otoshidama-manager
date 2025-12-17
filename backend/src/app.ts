import express, { Request, Response, NextFunction } from "express";
import balanceRouter from "./balance/balance.routes";
import accountsRouter from "./accounts/account.routes";
import router from "./balance/balance.routes";

const app = express();

// JSON リクエストボディを扱えるようにする middleware
app.use(express.json());

// 口座一覧など accounts 関連 API を /accounts 配下で使えるようにする
app.use("/accounts", accountsRouter);
app.use("/api/balance", balanceRouter);

// ルーティング
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ←ここからエラーハンドラーを追加
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ result: "error", message: err.message });
});

export default app;
