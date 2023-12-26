import { hash } from "bcrypt";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "../repositories/IAccountsRepository";
import { AppError } from "../../../shared/errors/AppError";

export class UpdateAccountService {
  constructor(private accountsRepository: IAccountsRepository) { }
  
  public async execute(account: Partial<Account>): Promise<Account | undefined> {
    const accountExists = await this.accountsRepository.get(account.id);
    if (!accountExists) throw new AppError('Account not found!', 404);
    account.password = await hash(account.password, 8);
    let result = await this.accountsRepository.update(account);
    delete result.password;
    return result;
  }
}