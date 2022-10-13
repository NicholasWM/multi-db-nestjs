import { IContactAttributes } from '@/contacts/@core/domain/entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'contact' })
export class ContactModel extends BaseEntity implements IContactAttributes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  ownerId: string;

  @Column()
  value: string;

  @Column()
  type: string;

  @Column()
  status: string;
}
