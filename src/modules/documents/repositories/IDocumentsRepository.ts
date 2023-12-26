import { ICreateDocumentDTO } from "../DTOs/ICreateDocumentDTO";
import { Document } from "../entities/Document";

export interface IDocumentsRepository {
  create(data: Partial<Document>): Promise<Document>;
  findByTitle(title: string, userId: string): Promise<Document | undefined>;
  findById(id: string, userId: string): Promise<Document | undefined>;
  delete(id: string, userId: string): Promise<void>;
}