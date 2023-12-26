import { IStorageProvider } from "../../../shared/container/providers/StorageProvider/IStorageProvider";
import { ICreateDocumentDTO } from "../DTOs/ICreateDocumentDTO";
import { Document } from "../entities/Document";
import { IDocumentsRepository } from "../repositories/IDocumentsRepository";
import { AppError } from "../../../shared/errors/AppError";
import fs from 'fs';
import path from 'path';
import { hash } from "bcrypt";
import cryptografy from '../../../config/cryptography';
import { encrypt } from '../../../shared/utils/Cryptography';

export class CreateDocumentService {
  constructor(
    private documentsRepository: IDocumentsRepository,
    private storageProvider: IStorageProvider,
  ) {}
  public async execute(data: ICreateDocumentDTO): Promise<Document> {
    const documentAlreadyExists = await this.documentsRepository.findByTitle(data.title, data.userId);
    if (documentAlreadyExists) {
      this.storageProvider.delete(data.fileName, '.');
      throw new AppError("Document already exists", 404);
    }

    encrypt(path.resolve('temp', data.fileName), path.resolve('temp', 'files', data.fileName));

    const integrityHash = await hash(fs.readFileSync(path.resolve('temp', data.fileName), { encoding: 'utf8' }), 8);
    await this.storageProvider.delete(data.fileName, '.');
    const document: Partial<Document> = {
      ...data,
      integrityHash,
      fileUrl: data.fileName,
    }

    return await this.documentsRepository.create(document);
  }
}