import { Model } from 'mongoose';
import { Contact } from '@/contacts/@core/domain/entity';
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
  // async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
  async findAll(query?: IQuery, options?: any): Promise<any[]> {
    const contacts = await this.contactModel.find();
    const formattedContacts = contacts.map((contact) => contact.toJSON());
    return formattedContacts;
  }

  async create(instance: Contact): Promise<void> {
    console.log('Mongoose Implementation');
    await this.contactModel.create(instance);
  }
}
