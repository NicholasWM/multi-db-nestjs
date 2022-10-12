import { GenericInMemoryRepository } from '@/@common/infra/db/in-memory/generic.implementation.repository';
import { GenericSequelizeRepository } from '@/@common/infra/db/sequelize/generic.implementation.repository';
import { Contact } from '@/contacts/@core/domain/entity';
import { InjectModel } from '@nestjs/sequelize';
import { IQuery } from '../@common/IQuery';
import { ContactModel } from './contact.model';

export class ContactsSequelizeRepository extends GenericSequelizeRepository<
  Contact,
  IQuery
> {
  contactModel: typeof ContactModel;
  constructor() {
    // @InjectModel(ContactModel)
    super();
    this.contactModel = ContactModel;
  }
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log('Sequelize Implementation');
    const contacts = await this.contactModel.findAll();
    return contacts;
  }

  async create(instance: Contact): Promise<void> {
    await this.contactModel.create(instance);
  }
}
