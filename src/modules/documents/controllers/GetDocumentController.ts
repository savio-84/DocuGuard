import { Request, Response } from "express";
import { GetDocumentRequestType } from "../schemas/GetDocumentSchema";
import { getDocumentService } from "../../../shared/container";
import path from 'path';
import { AppError } from "../../../shared/errors/AppError";

export class GetDocumentController {
  public static async handle(request: Request<GetDocumentRequestType>, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.user.id;

    const document = await getDocumentService.execute(id, userId);
    return response.status(200).json(document);
  }
}