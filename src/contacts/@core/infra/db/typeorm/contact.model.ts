import { ContactDTO } from '@/contacts/@core/domain/entity/Contact.dto';
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contact' })
export class ContactModel extends BaseEntity implements ContactDTO {
  @PrimaryGeneratedColumn('uuid', {})
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
