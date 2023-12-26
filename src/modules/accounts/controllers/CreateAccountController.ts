import { Request, Response } from "express";
import { CreateAccountRequestBodyType } from '../schemas/CreateAccountSchema';
import { createAccountService } from "../../../shared/container";

class CreateAccountController {
  public static async handle(request: Request<{}, {}, CreateAccountRequestBodyType>, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    let account = await createAccountService.execute({ name, email, password });
    delete account.password;
    return response.status(200).json(account);
  }
}

export { CreateAccountController }