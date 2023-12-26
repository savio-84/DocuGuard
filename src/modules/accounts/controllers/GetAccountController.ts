import { Request, Response } from "express";
import { getAccountService } from "../../../shared/container";
import { GetAccountRequestType } from "../schemas/GetAccountSchema";

export class GetAccountController {
  public static async handle(request: Request<GetAccountRequestType>, response: Response): Promise<Response> {
    const { id } = request.params;
    let account = await getAccountService.execute(id);
    delete account.password;
    return response.status(200).json(account);    
  }
}