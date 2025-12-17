import { Router } from "express";
import { transferController } from "./transfer.controller";

const router = Router();

router.post("/", transferController.executeTransfer);

export default router;
