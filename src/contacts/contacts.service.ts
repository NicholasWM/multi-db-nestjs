import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';
import { CreateContactsUseCase_2 } from './@core/application/CreateContact_2.useCase ';
import { CreateContactsUseCase_3 } from './@core/application/CreateContact_3.useCase';
import { CreateContactsUseCase_4 } from './@core/application/CreateContact_4.useCase';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { Contact } from './@core/domain/entity';
import { ContactGenericRepository } from './@core/domain/repository/contact.repository';
import { ContactModel } from './@core/infra/db/sequelize/contact.model';

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
    private readonly _repository: ContactGenericRepository,
    private readonly _useCases: {
      findAllUseCase: FindAllContactsUseCase;
      createContactsUseCase: CreateContactsUseCase;
      createContactsUseCase_2: CreateContactsUseCase_2;
      createContactsUseCase_3: CreateContactsUseCase_3;
      createContactsUseCase_4: CreateContactsUseCase_4;
    },
  ) {}

  async findAll() {
    const all = this._useCases.findAllUseCase.execute();
    return all;
  }

  async createWithService(contact: Contact) {
    const newContact = this._repository.create(contact);
    return newContact;
  }

  async createWithUseCase(contact: Contact) {
    const newContact = this._useCases.createContactsUseCase.execute({
      contact,
    });
    return newContact;
  }
  async createWithUseCase_2(contact: Contact) {
    const newContact = this._useCases.createContactsUseCase_2.execute({
      contact,
    });
    return newContact;
  }
  async createWithUseCase_3(contact: Contact) {
    console.log(contact);
    const newContact = this._useCases.createContactsUseCase_3.execute({
      contact,
    });
    return newContact;
  }
  async createWithUseCase_4(contact: Contact) {
    console.log(contact);
    const newContact = this._useCases.createContactsUseCase_4.execute({
      contact,
    });
    return newContact;
  }
}
