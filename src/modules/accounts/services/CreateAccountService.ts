import { ICreateAccountDTO } from "../DTOs/ICreateAccountDTO";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "../repositories/IAccountsRepository";
import { hash } from 'bcrypt';

class CreateAccountService {
  constructor(
    private usersRepository: IAccountsRepository
  ) {}
  
  public async execute({ name, email, password }: ICreateAccountDTO): Promise<Account> {
    const hashedPassword = await hash(password, 8);
    return await this.usersRepository.create({ name, email, password: hashedPassword });
  }
}

export { CreateAccountService };