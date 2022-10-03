import { GenericRepository } from '@/@common/generics/generic.repository';
import { Contact, IContactProps } from '../entity';

type IQuery = {
  [key in IContactProps]?: any;
};

interface IOptions {
  includes: any[];
  offset: number;
  skip: number;
}

export abstract class ContactRepository extends GenericRepository<
  Contact,
  IQuery,
  IOptions
> {}
