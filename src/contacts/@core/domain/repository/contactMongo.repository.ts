import {
  GenericRepository,
  IOptionsGeneric,
} from '@Common/generics/generic.repository';
import { Contact, IContactProps } from '../entity';

type IQuery = {
  [key in IContactProps]?: any;
};

export abstract class ContactRepositoryMongo extends GenericRepository<
  Contact,
  IQuery,
  IOptionsGeneric
> {}
