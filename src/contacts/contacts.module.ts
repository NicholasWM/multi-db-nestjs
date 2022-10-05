import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { ContactRepository } from './@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from './@core/infra/db/in-memory/contactsRepository.implementation';
import { ContactsInMemoryRepository2 } from './@core/infra/db/in-memory/contactsRepository2.implementation';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    {
      provide: ContactRepository,
      useClass: ContactsInMemoryRepository2,
    },
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
