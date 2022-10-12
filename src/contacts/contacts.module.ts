import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { ContactRepository } from './@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from './@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsSequelizeRepository } from './@core/infra/db/sequelize/contact.implementation.repository';
import { ContactModel } from './@core/infra/db/sequelize/contact.model';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { contactProviders } from './providers/index.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ContactsService,
    // ContactsSequelizeRepository,
    ...contactProviders,
    {
      provide: FindAllContactsUseCase,
      useFactory: (repository: ContactRepository) => {
        return new FindAllContactsUseCase(repository);
      },
      inject: [ContactRepository],
    },
  ],
})
export class ContactsModule {}
