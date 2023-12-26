import { IStorageProvider } from "../../../shared/container/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../shared/errors/AppError";
import { IDocumentsRepository } from "../repositories/IDocumentsRepository";

export class DeleteDocumentService {
  constructor(
    private documentsRepository: IDocumentsRepository,
    private storageProvider: IStorageProvider,
  ) { }

  public async execute(id: string, userId: string): Promise<void> {
    const document = await this.documentsRepository.findById(id, userId);
    if (!document) throw new AppError('Document not found', 404);
    this.storageProvider.delete(document.fileUrl, 'files');
    await this.documentsRepository.delete(id, userId);    
  }
}