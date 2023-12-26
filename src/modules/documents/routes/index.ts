import { Router } from "express";
import { ensureAuthenticated } from "../../../shared/infra/http/middlewares/ensureAuthenticated";
import { zodValidation } from "../../../shared/infra/http/middlewares/zodValidation";
import { CreateDocumentSchema } from "../schemas/CreateDocumentSchema";
import { CreateDocumentController } from "../controllers/CreateDocumentController";
import multer from 'multer';
import upload from "../../../config/upload";
import { DeleteDocumentSchema } from "../schemas/DeleteDocumentSchema";
import { DeleteDocumentController } from "../controllers/DeleteDocumentController";
import { GetDocumentSchema } from "../schemas/GetDocumentSchema";
import { GetDocumentController } from "../controllers/GetDocumentController";
import { GetDocumentFileController } from "../controllers/GetDocumentFileController";
import { VerifyDocumentSchema } from "../schemas/VerifyDocumentSchema";
import { VerifyDocumentController } from "../controllers/VerifyDocumentController";

const documentsRouter = Router();

documentsRouter.post('/', ensureAuthenticated, multer(upload).single('document'), zodValidation(CreateDocumentSchema), CreateDocumentController.handle);
documentsRouter.delete('/:id', ensureAuthenticated, zodValidation(DeleteDocumentSchema), DeleteDocumentController.handle);
documentsRouter.get('/:id', ensureAuthenticated, zodValidation(GetDocumentSchema), GetDocumentController.handle);
documentsRouter.get('/:id/file', ensureAuthenticated, zodValidation(GetDocumentSchema), GetDocumentFileController.handle);
documentsRouter.get('/verify/:id', ensureAuthenticated, multer(upload).single('document'), zodValidation(VerifyDocumentSchema), VerifyDocumentController.handle);

export { documentsRouter };