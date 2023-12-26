import { Request, Response } from "express";
import { DeleteAccountRequestType } from '../schemas/DeleteAccountSchema'
import { deleteAccountService } from "../../../shared/container";

export class DeleteAccountController {
  public static async handle(request: Request<DeleteAccountRequestType>, response: Response): Promise<Response> {
    const { id } = request.params;
    await deleteAccountService.execute(id);
    return response.status(200).send();
  } 
}