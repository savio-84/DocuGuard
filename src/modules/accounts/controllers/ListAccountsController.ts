import { Request, Response } from "express";
import { listAccountsService } from "../../../shared/container";

export class ListAccountsController {
  public static async handle(request: Request, response: Response): Promise<Response> {
    const accounts = await listAccountsService.execute();
    return response.status(200).json({accounts});
  }
}