import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "../../accounts/entities/Account";
import { randomUUID } from "crypto";

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @Column({ name: 'title' })
  public title: string;

  @Column({ name: 'user_id' })
  public userId: string;

  @Column({ name: 'integrity_hash' })
  public integrityHash: string;

  @Column({ name: 'file_url' })
  public fileUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}