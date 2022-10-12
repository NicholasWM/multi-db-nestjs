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
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log('Contacts In Memory Implementation');
    return new Promise((res) => res(this._data));
  }
}
