import { Model } from 'mongoose';
import { Contact, ContactDTO } from '@/contacts/@core/domain/entity';
import { IQuery } from '../@common/IQuery';
import { GenericMongooseRepository } from '@/@common/infra/db/mongoose/generic.implementation.repository';
import { ContactDocument } from './contact.schema';

export class ContactsMongooseRepositoryImplementation extends GenericMongooseRepository<
  Contact,
  IQuery
> {
  contactModel: Model<ContactDocument>;
  constructor(contactModel: Model<ContactDocument>) {
    super();
    this.contactModel = contactModel;
  }
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    const contacts = await this.contactModel.find();

    const formattedContacts = contacts.map((contact) => {
      const formatted = contact.toJSON<ContactDTO>();
      return formatted;
    });

    return formattedContacts;
  }

  async create(instance: Contact): Promise<void> {
    console.log('Mongoose Implementation');
    await this.contactModel.create(instance);
  }
}
