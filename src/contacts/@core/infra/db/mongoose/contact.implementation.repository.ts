import { Model } from 'mongoose';
import { Contact, IContactAttributes } from '@/contacts/@core/domain/entity';
import { IQuery } from '../@common/IQuery';
import { GenericMongooseRepository } from '@/@common/infra/db/mongoose/generic.implementation.repository';
import { ContactDocument, ContactSchema } from './contact.schema';
import { Inject } from '@nestjs/common';

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
    console.log('Mongoose Implementation');
    const contacts = await this.contactModel.find();
    return contacts;
  }

  async create(instance: Contact): Promise<void> {
    await this.contactModel.create(instance);
  }
}
