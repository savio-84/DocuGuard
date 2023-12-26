import { Request, Response } from "express";
import { CreateDocumentRequestType } from "../schemas/CreateDocumentSchema";
import { AppError } from "../../../shared/errors/AppError";
import { createDocumentService } from "../../../shared/container";

export class CreateDocumentController {
  public static async handle(request: Request, response: Response): Promise<Response> {
    const { title }: CreateDocumentRequestType = request.body;
    const fileName = request.file.filename;
    const userId = request.user.id;
    
    if (!fileName) throw new AppError('Insuficient data!', 400);

    const document = await createDocumentService.execute({
      fileName,
      title,
      userId
    });
    return response.status(200).json(document);
  }
}