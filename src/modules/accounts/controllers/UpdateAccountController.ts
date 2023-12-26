import { Request, Response } from "express";
import { UpdateAccountRequestBody, UpdateAccountRequestParams } from "../schemas/UpdateAccountSchema";
import { updateAccountService } from "../../../shared/container";

export class UpdateAccountController {
  public static async handle(request: Request<UpdateAccountRequestParams, {}, UpdateAccountRequestBody>, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params;
    const updatedAccount = await updateAccountService.execute({id, name, email, password});
    return response.status(200).json(updatedAccount);
  }
}