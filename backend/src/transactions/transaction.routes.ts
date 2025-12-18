import { Router } from "express";
import { testFetchTransactions } from "./transaction.controller";

const router = Router();

// GET /transactions
router.get("/", testFetchTransactions);

export default router;
