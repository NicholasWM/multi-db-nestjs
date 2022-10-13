import { Optional } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IContactAttributes } from '@/contacts/@core/domain/entity';

interface IContactModelAttributes extends IContactAttributes {
  id?: string;
}

export type ContactInput = Optional<IContactModelAttributes, 'id'>;

@Table({
  tableName: 'contacts',
})
export class ContactModel
  extends Model<IContactAttributes, ContactInput>
  implements IContactAttributes
{
  // TODO: Usar uuid
  @PrimaryKey
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id?: number;

  @Column
  ownerId: string;

  @Column
  value: string;

  @Column
  type: string;

  @Column
  status: string;
}
