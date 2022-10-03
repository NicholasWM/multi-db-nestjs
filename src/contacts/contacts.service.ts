import { Injectable } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { Contact } from './@core/domain/entity';
import { ContactRepository } from './@core/domain/repository/contact.repository';

@Injectable()
export class ContactsService {
  constructor(
    private readonly _repository: ContactRepository,
    private findAllUseCase: FindAllContactsUseCase,
  ) {}

  async findAll() {
    const all = this.findAllUseCase.execute();
    return all;
  }

  async create(contact: Contact) {
    const newContact = this._repository.create(contact);
    return newContact;
  }
}
