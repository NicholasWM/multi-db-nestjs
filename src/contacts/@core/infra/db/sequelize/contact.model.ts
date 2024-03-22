import { ContactDTO } from '@/contacts/@core/domain/entity/Contact.dto';
import { Optional } from 'sequelize';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

type IContactModelAttributes = ContactDTO;

export type ContactInput = Optional<IContactModelAttributes, 'id'>;

export type TContactModel = Model<ContactDTO, ContactInput>;

@Table({
  modelName: 'contacts',
})
export class ContactModel
  extends Model<ContactDTO, ContactInput>
  implements ContactDTO
{
  @Column({
    allowNull: false,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    unique: true,
    type: DataType.STRING,
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
