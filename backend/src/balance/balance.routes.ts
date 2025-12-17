import { Router } from 'express';
import { fetchBalance } from './balance.controller';

const router = Router();

router.get('/', fetchBalance);

export default router;
