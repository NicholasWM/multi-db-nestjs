import { v4 as uuid } from 'uuid';
import { GenericTypeOrmRepository } from '@/@common/infra/db/typeorm/generic.implementation.repository';
import { Contact } from '@/contacts/@core/domain/entity';
import { Repository } from 'typeorm';
import { IQuery } from '../@common/IQuery';
import { ContactModel } from './contact.model';

export class ContactsTypeOrmRepositoryImplementation extends GenericTypeOrmRepository<
  Contact,
  IQuery
> {
  constructor(readonly _repository: Repository<ContactModel>) {
    super();
    // this.contactModel = model;
  }
  get model(): Repository<ContactModel> {
    return this._repository;
  }
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log('TypeOrm Implementation');
    const contacts = await this._repository.find();
    return contacts;
  }

  async create(instance: Contact): Promise<any> {
    console.log('TypeOrm Implementation');
    const result = await this._repository.save({
      id: uuid(),
      ...instance,
    });
    return result;
  }
}
