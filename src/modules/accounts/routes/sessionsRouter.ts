import { Router } from "express";
import { zodValidation } from "../../../shared/infra/http/middlewares/zodValidation";
import { AuthenticateUserSchema } from "../schemas/AuthenticateUserSchema";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
const sessionsRouter = Router();

sessionsRouter.post('/', zodValidation(AuthenticateUserSchema), AuthenticateUserController.handle);

export { sessionsRouter };