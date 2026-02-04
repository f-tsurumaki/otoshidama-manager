import { Router } from "express";
import { transferController } from "./transfer.controller";

const router = Router();

router.post("/pocket-money", transferController.pocketMoney);
router.post("/investment", transferController.investment);
router.post("/savings", transferController.savings);
export default router;
