import { Router } from 'express';
import { getBalance } from './balance.controller';

const router = Router();

router.get('/balances', getBalance);

export default router;
