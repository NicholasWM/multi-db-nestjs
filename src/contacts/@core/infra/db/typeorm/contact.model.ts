import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { IContactAttributes } from '@/contacts/@core/domain/entity';

@Entity({ name: 'contact' })
export class ContactModel extends BaseEntity implements IContactAttributes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ownerId: string;

  @Column()
  value: string;

  @Column()
  type: string;

  @Column()
  status: string;
}
