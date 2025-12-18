import { Request, Response } from "express";
import { transferService } from "./transfer.service";

export const transferController = {
  // お小遣い振替
  async pocketMoney(req: Request, res: Response) {
    console.log("📩 req.body:", req.body);
    console.log("📩 keys:", Object.keys(req.body));
    try {
      const paymentAmount = req.body?.paymentAmount ?? "500"; // 仮の値でテスト

      //const { paymentAmount } = req.body;
      const result = await transferService.transferPocketMoney(paymentAmount);
      res.json(result);
    } catch (err: any) {
      console.error("❌ Error in pocketMoney:", err.message);
      res.status(500).json({ error: err.message });
    }
  },

  // 投資振替
  async investment(req: Request, res: Response) {
    try {
      const { paymentAmount } = req.body;
      const result = await transferService.transferInvestment(paymentAmount);
      res.json(result);
    } catch (err: any) {
      console.error("❌ Error in investment:", err.message);
      res.status(500).json({ error: err.message });
    }
  },

  // 貯金振替
  async savings(req: Request, res: Response) {
    try {
      const { paymentAmount } = req.body;
      const result = await transferService.transferSavings(paymentAmount);
      res.json(result);
    } catch (err: any) {
      console.error("❌ Error in savings:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
};
