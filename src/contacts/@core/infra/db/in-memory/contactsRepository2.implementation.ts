import { GenericInMemoryRepository } from '@Common/infra/db/in-memory/generic.implementation.repository';
import { Contact, IContactProps } from '@/contacts/@core/domain/entity';

type IQuery = {
  [key in IContactProps]?: any;
};

export class ContactsInMemoryRepository2 extends GenericInMemoryRepository<
  Contact,
  IQuery
> {
  async findAll(query?: IQuery, options?: any): Promise<Contact[]> {
    console.log(2);
    return new Promise((res) => res(this._data));
  }
}
