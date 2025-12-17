import { Router } from 'express';
import { fetchBalance } from './balance.controller';

const router = Router();

router.get('/accounts/balance', fetchBalance);

export default router;
