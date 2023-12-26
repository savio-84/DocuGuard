import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Document } from '../../documents/entities/Document';

@Entity({name: 'accounts'})
export class Account {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: string;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'email'})
  email: string;

  @Column({name: 'password'})
  password: string;

  @Column({name: 'is_admin'})
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
    this.isAdmin = false;
    
  }
}