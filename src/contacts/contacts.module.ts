import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactGenericRepository,
  ContactRepository,
  ContactRepositorySequelize,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
  ContactRepositoryTypeORM,
  ContactRepositoryTypeORM_DB_2,
  ContactRepositoryTypeORM_DEFAULT,
} from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactServiceDTO, ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { repositoryBuilderByORM, buildInjectorByORM } from '@/database/helpers';
import { CreateContactsUseCase_2 } from './@core/application/CreateContact_2.useCase ';
import { CreateContactsUseCase_3 } from './@core/application/CreateContact_3.useCase';
import { CreateContactsUseCase_4 } from './@core/application/CreateContact_4.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ...contactProviders,
    {
      provide: ContactsService,
      useFactory: (
        defaultRepository: any,
        findAllContactsUseCase: FindAllContactsUseCase,
        createContactsUseCase: CreateContactsUseCase,
        createContactsUseCase_2: CreateContactsUseCase_2,
        createContactsUseCase_3: CreateContactsUseCase_3,
        createContactsUseCase_4: CreateContactsUseCase_4,
      ) => {
        console.log('createContactsUseCase', createContactsUseCase);
        console.log('createContactsUseCase_2', createContactsUseCase_2);
        console.log('createContactsUseCase_3', createContactsUseCase_3);
        console.log('createContactsUseCase_4', createContactsUseCase_4);
        return new ContactsService(
          repositoryBuilderByORM(defaultRepository, 'SEQUELIZE')('contacts'),
          {
            findAllUseCase: findAllContactsUseCase,
            createContactsUseCase: createContactsUseCase,
            createContactsUseCase_2: createContactsUseCase_2,
            createContactsUseCase_3: createContactsUseCase_3,
            createContactsUseCase_4: createContactsUseCase_4,
          },
        );
      },
      inject: [
        buildInjectorByORM(
          AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT,
          'SEQUELIZE',
        ),
        FindAllContactsUseCase,
        CreateContactsUseCase,
        CreateContactsUseCase_2,
        CreateContactsUseCase_3,
        CreateContactsUseCase_4,
      ],
    },

    {
      provide: CreateContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase(
          repositoryBuilderByORM(defaultRepository, 'SEQUELIZE')('contacts'),
        );
        return createContactsUseCase;
      },
      inject: [
        buildInjectorByORM(AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2, 'SEQUELIZE'),
      ],
    },
    {
      provide: CreateContactsUseCase_2,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_2(
          repositoryBuilderByORM(defaultRepository, 'TYPEORM')(),
        );
        return createContactsUseCase;
      },
      inject: [buildInjectorByORM(ContactRepositoryTypeORM_DEFAULT, 'TYPEORM')],
    },
    {
      provide: CreateContactsUseCase_3,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_3(
          repositoryBuilderByORM(defaultRepository, 'TYPEORM')(),
        );
        return createContactsUseCase;
      },
      inject: [buildInjectorByORM(ContactRepositoryTypeORM_DB_2, 'TYPEORM')],
    },
    {
      provide: CreateContactsUseCase_4,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_4(
          repositoryBuilderByORM(defaultRepository, 'TYPEORM')(),
        );
        return createContactsUseCase;
      },
      inject: [buildInjectorByORM(ContactRepositoryTypeORM_DEFAULT, 'TYPEORM')],
    },

    {
      provide: FindAllContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const findAllUseCase = new FindAllContactsUseCase(
          repositoryBuilderByORM(defaultRepository, 'SEQUELIZE')('contacts'),
        );
        return findAllUseCase;
      },
      inject: [
        buildInjectorByORM(AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2, 'SEQUELIZE'),
      ],
    },
  ],
})
export class ContactsModule {}
