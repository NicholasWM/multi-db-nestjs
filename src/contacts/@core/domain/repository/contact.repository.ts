import { Contact, IContactProps } from '../entity';
import {
  IOptionsGeneric,
  GenericRepository,
} from '@Common/generics/generic.repository';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';

type IQuery = {
  [key in IContactProps]?: any;
};

export abstract class ContactGenericRepository extends GenericRepository<
  Contact,
  IQuery,
  IOptionsGeneric
> {}

export abstract class ContactRepositorySequelize extends ContactGenericRepository {}
export abstract class ContactRepositorySequelize_DEFAULT extends ContactGenericRepository {}
export abstract class ContactRepositorySequelize_DB_2 extends ContactGenericRepository {}

export abstract class ContactRepositoryTypeORM extends ContactGenericRepository {}
export abstract class ContactRepositoryTypeORM_DEFAULT extends ContactGenericRepository {}
export abstract class ContactRepositoryTypeORM_DB_2 extends ContactGenericRepository {}

export abstract class ContactRepositoryMongoose extends ContactGenericRepository {}
export abstract class ContactRepositoryInMemory extends ContactGenericRepository {}

export abstract class ContactRepository extends ContactGenericRepository {}

// export default function GetDatabase(choice: string) {
//   const options = {
//     [AVAILABLE_DATA_SOURCES.TYPEORM.DEFAULT]: ContactRepositoryTypeORM_DEFAULT,
//     [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2]: ContactRepositoryTypeORM_DB_2,
//   };

//   return options[choice]
// }
