import { v4 as uuid } from 'uuid';
import { GenericInMemoryRepository } from '@Common/infra/db/in-memory/generic.implementation.repository';
import { Contact } from '@/contacts/@core/domain/entity';
import { IQuery } from '../@common/IQuery';

export class ContactsInMemoryRepository extends GenericInMemoryRepository<
  Contact,
  IQuery
> {
  constructor() {
    super();
  }

  create(instance: Contact, options?: any): Promise<any> {
    console.log('In Memory Implementation');
    return new Promise((resolve) => {
      const data = { ...instance, id: uuid() };
      this._data.push(data);
      resolve(data);
    });
  }

  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log('Find All - Contacts In Memory Implementation');
    return new Promise((res) => res(this._data));
  }
}
