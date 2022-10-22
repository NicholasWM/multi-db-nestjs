import { Injectable } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { Contact } from './@core/domain/entity';
import { ContactGenericRepository } from './@core/domain/repository/contact.repository';

interface ContactsServiceUseCases {
  findAllUseCase: FindAllContactsUseCase;
}
export interface ContactServiceDTO {
  useCases: ContactsServiceUseCases;
  readonly repository: ContactGenericRepository;
}

@Injectable()
export class ContactsService {
  private readonly _repository: ContactGenericRepository;
  private _useCases: { findAllUseCase: FindAllContactsUseCase };

  constructor(contactServiceDTO: ContactServiceDTO) {
    this._repository = contactServiceDTO.repository;
    this._useCases = contactServiceDTO.useCases;
  }

  async findAll() {
    const all = this._useCases.findAllUseCase.execute();
    return all;
  }

  async create(contact: Contact) {
    console.log(contact);
    const newContact = this._repository.create(contact);
    return newContact;
  }
}
