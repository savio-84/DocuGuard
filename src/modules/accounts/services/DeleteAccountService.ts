import { IAccountsRepository } from "../repositories/IAccountsRepository";

export class DeleteAccountService {
  constructor(private accountsRepository: IAccountsRepository) {}
  public async execute(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}