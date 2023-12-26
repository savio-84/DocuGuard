import { Request, Response } from "express";
import { AuthenticateUserRequestType } from "../schemas/AuthenticateUserSchema";
import { authenticateUserService } from "../../../shared/container";

export class AuthenticateUserController {
  public static async handle(request: Request<{}, {}, AuthenticateUserRequestType>, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const { user, token } = await authenticateUserService.execute({email, password});
    return response.status(200).json({ user, token });
  }
}