import express, { Request, Response, NextFunction } from "express";

// accounts 配下のルーティングを使うために router を import
import accountsRouter from "./accounts/account.routes";
import router from "./balance/balance.routes";

const app = express();

// JSON リクエストボディを扱えるようにする middleware
app.use(express.json());

// 口座一覧など accounts 関連 API を /accounts 配下で使えるようにする
app.use("/accounts", accountsRouter);
app.use("/balance", router);

// ルーティング
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
