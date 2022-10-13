import { Optional } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IContactAttributes } from '@/contacts/@core/domain/entity';

type IContactModelAttributes = IContactAttributes;

export type ContactInput = Optional<IContactModelAttributes, 'id'>;

@Table({
  tableName: 'contacts',
})
export class ContactModel
  extends Model<IContactAttributes, ContactInput>
  implements IContactAttributes
{
  constructor() {
    super();
  }

  @PrimaryKey
  @Column({
    primaryKey: true,
  })
  id: string;

  @Column
  ownerId: string;

  @Column
  value: string;

  @Column
  type: string;

  @Column
  status: string;
}
