import { Contact, IContactProps } from '../entity';
import {
  IOptionsGeneric,
  GenericRepository,
} from '@Common/generics/generic.repository';

type IQuery = {
  [key in IContactProps]?: any;
};

export abstract class ContactGenericRepository extends GenericRepository<
  Contact,
  IQuery,
  IOptionsGeneric
> {}

export abstract class ContactRepositorySequelize_DEFAULT extends ContactGenericRepository {}
export abstract class ContactRepositorySequelize_DB_2 extends ContactGenericRepository {}

export abstract class ContactRepositoryTypeORM extends ContactGenericRepository {}
export abstract class ContactRepositoryTypeORM_MySQL extends ContactGenericRepository {}
export abstract class ContactRepositoryTypeORM_DB_2 extends ContactGenericRepository {}

export abstract class ContactRepositoryMongoose extends ContactGenericRepository {}
export abstract class ContactRepositoryInMemory extends ContactGenericRepository {}

export abstract class ContactRepository extends ContactGenericRepository {}
