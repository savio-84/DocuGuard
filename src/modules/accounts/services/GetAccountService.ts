import { AppError } from "../../../shared/errors/AppError";
import { IAccountsRepository } from "../repositories/IAccountsRepository";

export class GetAccountService {
  constructor(private accountsRepository: IAccountsRepository) { }
  
  public async execute(id: string) {
    const account = await this.accountsRepository.get(id);
    if (!account) throw new AppError('Account not found!');
    return account;
  };
}