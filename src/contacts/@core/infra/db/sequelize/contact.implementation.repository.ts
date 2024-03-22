import { GenericSequelizeRepository } from '@/@common/infra/db/sequelize/generic.implementation.repository';
import { IQuery } from '../@common/IQuery';
import { ContactInput } from './contact.model';
import { Contact } from '@/contacts/@core/domain/entity';
import { Model } from 'sequelize';
import { ContactDTO } from '@/contacts/@core/domain/entity/Contact.dto';

export class ContactsSequelizeRepository extends GenericSequelizeRepository<
  Contact,
  IQuery,
  ContactDTO,
  ContactInput
> {
  contactModel: typeof Model;
  constructor(contactModel: typeof Model) {
    super(contactModel);
  }
}
