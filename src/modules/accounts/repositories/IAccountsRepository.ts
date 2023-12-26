import { Account } from "../entities/Account";
import { ICreateAccountDTO } from '../DTOs/ICreateAccountDTO';

export interface IAccountsRepository {
  get(id: string): Promise<Account | undefined>;
  getByEmail(email: string): Promise<Account | undefined>;
  create(data: ICreateAccountDTO): Promise<Account>;
  update(data: Partial<Account>): Promise<Account | undefined>;
  delete(id: string): Promise<void>;
  list(): Promise<Account[]>;
}