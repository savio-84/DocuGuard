import { Request, Response } from "express";
import { DeleteDocumentRequestType } from "../schemas/DeleteDocumentSchema";
import { deleteDocumentService } from "../../../shared/container";

export class DeleteDocumentController {
  public static async handle(request: Request<DeleteDocumentRequestType>, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.user.id;
    await deleteDocumentService.execute(id, userId);
    return response.status(200).send();
  }
}