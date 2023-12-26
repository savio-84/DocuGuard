import { LocalStorageProvider } from "./providers/StorageProvider/LocalStorageProvider";

import { IAccountsRepository } from "../../modules/accounts/repositories/IAccountsRepository";
import { AccountsRepository } from "../../modules/accounts/repositories/AccountsRepository";
import { IDocumentsRepository } from "../../modules/documents/repositories/IDocumentsRepository";
import { DocumentsRepository } from "../../modules/documents/repositories/DocumentsRepository";

import { CreateAccountService } from "../../modules/accounts/services/CreateAccountService";
import { DeleteAccountService } from "../../modules/accounts/services/DeleteAccountService";
import { GetAccountService } from "../../modules/accounts/services/GetAccountService";
import { UpdateAccountService } from "../../modules/accounts/services/UpdateAccountService";
import { AuthenticateUserService } from "../../modules/accounts/services/AuthenticateUserService";
import { ListAccountsService } from "../../modules/accounts/services/ListAccountsService";

import { CreateDocumentService } from "../../modules/documents/services/CreateDocumentService";
import { DeleteDocumentService } from "../../modules/documents/services/DeleteDocumentService";
import { GetDocumentService } from "../../modules/documents/services/GetDocumentService";
import { VerifyDocumentService } from "../../modules/documents/services/VerifyDocumentService";


// providers
const localStorageProvider = new LocalStorageProvider();

// repositories
const accountsRepository: IAccountsRepository = new AccountsRepository();
const documentsRepository: IDocumentsRepository = new DocumentsRepository();

// services
// accounts
const createAccountService = new CreateAccountService(accountsRepository);
const getAccountService = new GetAccountService(accountsRepository);
const updateAccountService = new UpdateAccountService(accountsRepository);
const deleteAccountService = new DeleteAccountService(accountsRepository);
const authenticateUserService = new AuthenticateUserService(accountsRepository);
const listAccountsService = new ListAccountsService(accountsRepository);

// documents
const createDocumentService = new CreateDocumentService(documentsRepository, localStorageProvider);
const deleteDocumentService = new DeleteDocumentService(documentsRepository, localStorageProvider);
const getDocumentService = new GetDocumentService(documentsRepository, localStorageProvider);
const verifyDocumentService = new VerifyDocumentService(documentsRepository);


export {
  accountsRepository,
  createAccountService,
  getAccountService,
  updateAccountService,
  deleteAccountService,
  authenticateUserService,
  listAccountsService,
  localStorageProvider,
  documentsRepository,
  createDocumentService,
  deleteDocumentService,
  getDocumentService,
  verifyDocumentService
};