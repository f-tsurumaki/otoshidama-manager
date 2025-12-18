// src/accounts/account.routes.ts
import { Router } from "express";
import { fetchAccounts } from "./account.controller";

const router = Router();

router.get("/", fetchAccounts);

export default router;
