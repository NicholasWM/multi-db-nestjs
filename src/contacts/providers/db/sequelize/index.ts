import { ORM_AVAILABLE_DATA_SOURCES_ORM } from '@/@common/generics/generic.provider';
import { ContactRepositorySequelize } from '@/contacts/@core/domain/repository/contact.repository';
import { ContactsSequelizeRepository } from '@/contacts/@core/infra/db/sequelize/contact.implementation.repository';
import { ClassProvider } from '@nestjs/common';

interface IProvider {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.SEQUELIZE]: ClassProvider<any>;
}

export const sequelizeContactProviders: IProvider = {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.SEQUELIZE]: {
    provide: ContactRepositorySequelize,
    useClass: ContactsSequelizeRepository,
  },
};
