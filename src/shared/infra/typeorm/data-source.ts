import 'dotenv/config'
import { DataSource, DataSourceOptions, EntitySchema, MixedList } from "typeorm";

import { CreateUser1702843214152 } from './migrations/1702843214152-CreateUser';
import { CreateDocuments1702848400088 } from './migrations/1702848400088-CreateDocuments';
import { CreateAdmins1703205717926 } from './migrations/1703205717926-CreateAdmins';

import { Account } from '../../../modules/accounts/entities/Account';
import { Document } from '../../../modules/documents/entities/Document';

const migrations: MixedList<string | Function> | undefined = [
  CreateUser1702843214152,
  CreateDocuments1702848400088,
  CreateAdmins1703205717926
];

const entities: MixedList<string | Function | EntitySchema<any>> | undefined = [
  Account,
  Document
];

const testOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  migrationsTableName: 'migrations',
  migrations,
  entities,
}

const developmentOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.NODE_ENV === 'test' ? 'test' : process.env.POSTGRES_DB}`,
  migrationsTableName: 'migrations',
  migrations,
  entities,
}

const productionOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.NODE_ENV === 'test' ? 'test' : process.env.POSTGRES_DB}`,
  migrationsTableName: 'migrations',
  migrations,
  entities,
}

let AppDataSource: DataSource;

switch (process.env.NODE_ENV) {
  case 'production':
    AppDataSource = new DataSource(productionOptions);
    break;

  case 'test':
    AppDataSource = new DataSource(testOptions);
    break;

  case 'development':
    AppDataSource = new DataSource(developmentOptions);
    break;

  default:
    AppDataSource = new DataSource(developmentOptions);
    break;
}

export { AppDataSource };