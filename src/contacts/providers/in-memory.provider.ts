import { ClassProvider } from '@nestjs/common';
import { ContactRepository } from '../@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';

export const contactProvidersInMemory: ClassProvider<ContactRepository>[] = [
  {
    provide: ContactRepository,
    useClass: ContactsInMemoryRepository,
  },
];
