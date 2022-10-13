import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { IContactAttributes } from '@/contacts/@core/domain/entity';

@Entity({ name: 'contact' })
export class ContactModel extends BaseEntity implements IContactAttributes {
  @PrimaryColumn()
  id: string;

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
