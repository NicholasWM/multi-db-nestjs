import { Inject, Injectable } from '@nestjs/common';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';
import { Contact, IContactAttributes } from './@core/domain/entity';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactGenericRepository,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
} from './@core/domain/repository/contact.repository';

interface ContactsServiceUseCases {
  findAllUseCase: FindAllContactsUseCase;
  createContactsUseCase: CreateContactsUseCase;
}
export interface ContactServiceDTO {
  useCases: ContactsServiceUseCases;
  readonly repository: ContactGenericRepository;
}

@Injectable()
export class ContactsService {
  constructor(
    // private readonly _repository: FindAllContactsUseCase,
    private readonly _repository: ContactGenericRepository,

    private readonly _useCases: {
      findAllUseCase: FindAllContactsUseCase;
      createContactsUseCase: CreateContactsUseCase;
    },
  ) {}

  async findAll() {
    const all = this._useCases.findAllUseCase.execute();
    return all;
  }

  async createWithService(contact: Contact): Promise<IContactAttributes> {
    const newContact = await this._repository.create(contact);
    console.log(newContact);
    return newContact;
  }

  async createWithUseCase(contact: Contact) {
    const newContact = this._useCases.createContactsUseCase.execute({
      contact,
    });
    return newContact;
  }
}
