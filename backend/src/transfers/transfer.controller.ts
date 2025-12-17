import { Request, Response } from "express";
import { transferService } from "./transfer.service";

export const transferController = {
  async executeTransfer(req: Request, res: Response) {
    try {
      const { depositSpAccountId, debitSpAccountId, paymentAmount } = req.body;
      const result = await transferService.executeTransfer({
        depositSpAccountId,
        debitSpAccountId,
        paymentAmount,
      });

      res.json(result);
    } catch (err: any) {
      console.error("❌ Error in transferController.executeTransfer:", err);
      res.status(500).json({ error: err.message });
    }
  },
};
