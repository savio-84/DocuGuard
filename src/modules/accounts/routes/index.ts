import { Router } from "express";

import { CreateAccountController } from '../controllers/CreateAccountController';
import { GetAccountController } from "../controllers/GetAccountController";
import { zodValidation } from "../../../shared/infra/http/middlewares/zodValidation";
import { CreateAccountSchema } from "../schemas/CreateAccountSchema";
import { GetAccountSchema } from "../schemas/GetAccountSchema";
import { UpdateAccountSchema } from "../schemas/UpdateAccountSchema";
import { UpdateAccountController } from "../controllers/UpdateAccountController";
import { DeleteAccountSchema } from "../schemas/DeleteAccountSchema";
import { DeleteAccountController } from "../controllers/DeleteAccountController";
import { ensureAuthenticated } from "../../../shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../../../shared/infra/http/middlewares/ensureAdmin";
import { ListAccountsController } from "../controllers/ListAccountsController";

const accountsRouter = Router();

accountsRouter.post('/', zodValidation(CreateAccountSchema), CreateAccountController.handle);
accountsRouter.get('/:id', ensureAuthenticated, zodValidation(GetAccountSchema), GetAccountController.handle);
accountsRouter.put('/:id', ensureAuthenticated, zodValidation(UpdateAccountSchema), UpdateAccountController.handle);
accountsRouter.delete('/:id', ensureAuthenticated, zodValidation(DeleteAccountSchema), DeleteAccountController.handle);
accountsRouter.get('/', ensureAuthenticated, ensureAdmin, ListAccountsController.handle);

export { accountsRouter };