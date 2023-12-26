import { Repository } from "typeorm";
import { Account } from "../entities/Account";
import { AppDataSource } from "../../../shared/infra/typeorm/data-source";
import { IAccountsRepository } from "./IAccountsRepository";
import { ICreateAccountDTO } from "../DTOs/ICreateAccountDTO";

class AccountsRepository implements IAccountsRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = AppDataSource.getRepository(Account);
  }

  public async list(): Promise<Account[]> {
    return await this.repository.find({ select: ['name', 'email'] });
  }

  public async getByEmail(email: string): Promise<Account> {
    return await this.repository.findOne({ where: { email } });
  }
  
  public async get(id: string): Promise<Account> {
    return await this.repository.findOne({ where: { id } });
  }
  
  public async create(data: ICreateAccountDTO): Promise<Account> {
    const newUser = this.repository.create(data);
    return await this.repository.save(newUser);
  }
  
  public async update(data: Partial<Account>): Promise<Account> {
    await this.repository.update(data.id, data);
    return this.repository.findOne({ where: { id: data.id } });
  }
  
  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}

export { AccountsRepository };