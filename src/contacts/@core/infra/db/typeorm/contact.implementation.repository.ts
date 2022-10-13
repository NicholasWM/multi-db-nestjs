import { GenericTypeOrmRepository } from '@/@common/infra/db/typeorm/generic.implementation.repository';
import { Contact } from '@/contacts/@core/domain/entity';
import { IQuery } from '../@common/IQuery';
import { ContactModel } from './contact.model';

export class ContactsTypeOrmRepositoryImplementation extends GenericTypeOrmRepository<
  Contact,
  IQuery
> {
  contactModel: typeof ContactModel;
  constructor() {
    super();
    this.contactModel = ContactModel;
  }
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log('TypeOrm Implementation');
    const contacts = await this.contactModel.find();
    return contacts;
  }

  async create(instance: Contact): Promise<void> {
    await this.contactModel.insert(instance);
  }
}
