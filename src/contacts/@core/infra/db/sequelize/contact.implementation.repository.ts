import { GenericSequelizeRepository } from '@/@common/infra/db/sequelize/generic.implementation.repository';
import { IQuery } from '../@common/IQuery';
import { ContactInput } from './contact.model';
import { Contact, IContactAttributes } from '@/contacts/@core/domain/entity';
import { Model } from 'sequelize';

export class ContactsSequelizeRepository extends GenericSequelizeRepository<
  Contact,
  IQuery,
  IContactAttributes,
  ContactInput
> {
  contactModel: typeof Model;
  constructor(contactModel: typeof Model) {
    super(contactModel);
  }
}
