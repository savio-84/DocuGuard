import { AppError } from "../../../shared/errors/AppError";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "../repositories/IAccountsRepository";

export class ListAccountsService {
  constructor(private accountsRepository: IAccountsRepository) { }

  public async execute(): Promise<Account[]> {
    return await this.accountsRepository.list();
  }
}