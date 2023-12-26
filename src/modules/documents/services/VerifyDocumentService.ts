import { AppError } from "../../../shared/errors/AppError";
import { IDocumentsRepository } from "../repositories/IDocumentsRepository";
import path from 'node:path';
import fs, { unlinkSync } from 'node:fs';
import { compare } from 'bcrypt';

export class VerifyDocumentService {
  constructor(
    private documentsRepository: IDocumentsRepository
  ) { }
  
  public async execute(id: string, userId: string, fileName: string): Promise<boolean> {
    const savedDocument = await this.documentsRepository.findById(id, userId);
    if (!savedDocument) throw new AppError('Document not found!', 404);

    const match = await compare(fs.readFileSync(path.resolve('temp', fileName)), savedDocument.integrityHash);
    unlinkSync(path.resolve('temp', fileName));
    return match;
  }
}