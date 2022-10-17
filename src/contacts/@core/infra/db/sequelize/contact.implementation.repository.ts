import { GenericSequelizeRepository } from '@/@common/infra/db/sequelize/generic.implementation.repository';
import { IQuery } from '../@common/IQuery';
import { ContactModel, ContactInput } from './contact.model';
import { Contact, IContactAttributes } from '@/contacts/@core/domain/entity';

export class ContactsSequelizeRepository extends GenericSequelizeRepository<
  Contact,
  IQuery,
  IContactAttributes,
  ContactInput
> {
  contactModel: typeof ContactModel;
  constructor() {
    super(ContactModel);
  }
}
