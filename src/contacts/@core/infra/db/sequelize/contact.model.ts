import { Optional } from 'sequelize';
import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { IContactAttributes } from '@/contacts/@core/domain/entity';

type IContactModelAttributes = IContactAttributes;

export type ContactInput = Optional<IContactModelAttributes, 'id'>;

export type TContactModel = Model<IContactAttributes, ContactInput>;

@Table({
  modelName: 'contacts',
})
export class ContactModel
  extends Model<IContactAttributes, ContactInput>
  implements IContactAttributes
{
  @Column({
    allowNull: false,
    defaultValue: DataType.UUID,
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  ownerId: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  value: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  type: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  status: string;
}
