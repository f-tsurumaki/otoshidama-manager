import express, { Request, Response } from "express";
import router from "./balance/balance.routes";
import transactionRouter from "./transactions/transaction.routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// ルーティング
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", router);
app.use("/api/transactions", transactionRouter);
export default app;
