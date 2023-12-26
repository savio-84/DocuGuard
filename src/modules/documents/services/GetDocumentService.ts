import { IStorageProvider } from "../../../shared/container/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../shared/errors/AppError";
import { Document } from "../entities/Document";
import { IDocumentsRepository } from "../repositories/IDocumentsRepository";
import fs from 'fs';
import path from 'path';

export class GetDocumentService {
  constructor(
    private documentsRepository: IDocumentsRepository,
    private storageProvider: IStorageProvider
  ) { }

  public async execute(id: string, userId: string): Promise<Document | undefined> {
    const document = await this.documentsRepository.findById(id, userId);
    if (!document) throw new AppError('Document not found', 404);
    return document;
  }
}