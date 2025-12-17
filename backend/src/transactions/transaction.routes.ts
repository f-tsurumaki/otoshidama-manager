import { Router } from 'express';
import { testFetchTransactions } from './transaction.controller';

const router = Router();

// GET /api/transactions/test
router.get('/test', testFetchTransactions);

export default router;
