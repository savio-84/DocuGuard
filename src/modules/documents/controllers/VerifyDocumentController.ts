import { Request, Response } from "express";
import { VerifyDocumentRequestType } from '../schemas/VerifyDocumentSchema';
import { verifyDocumentService } from "../../../shared/container";
export class VerifyDocumentController {
  public static async handle(request: Request<VerifyDocumentRequestType>, response: Response): Promise<Response> {
    const fileName = request.file.filename;
    const { id } = request.params;
    const userId = request.user.id;

    const match = await verifyDocumentService.execute(id, userId, fileName);
    return response.status(200).json(match);
  }
}