import { Router } from 'express';
import { accountsRouter } from '../../../modules/accounts/routes';
import { sessionsRouter } from '../../../modules/accounts/routes/sessionsRouter';
import { documentsRouter } from '../../../modules/documents/routes';

const router = Router();

router.use('/accounts', accountsRouter);
router.use('/sessions', sessionsRouter);
router.use('/documents', documentsRouter);

export { router };