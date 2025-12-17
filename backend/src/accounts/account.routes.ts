// ルーティング
import { Router } from "express";
import { fetchAccounts } from "./account.controller";

const router = Router();

/**
 * GET /accounts
 */
router.get("/", fetchAccounts);

export default router;
