import { Repository } from "typeorm";
import { AppDataSource } from "../../../shared/infra/typeorm/data-source";
import { Document } from "../entities/Document";
import { IDocumentsRepository } from "./IDocumentsRepository";

export class DocumentsRepository implements IDocumentsRepository {
  private repository: Repository<Document>;
  constructor() {
    this.repository = AppDataSource.getRepository(Document);
  }

  public async delete(id: string, userId: string): Promise<void> {
    await this.repository.delete({ id, userId });
  }

  public async findById(id: string, userId: string): Promise<Document> {
    return await this.repository.findOne({ where: { id, userId } });
  }

  public async findByTitle(title: string, userId: string): Promise<Document> {
    return await this.repository.findOne({ where: { title, userId } });
  }

  public async create(data: Partial<Document>): Promise<Document> {
    const document = this.repository.create(data);
    return await this.repository.save(document);
  }
}