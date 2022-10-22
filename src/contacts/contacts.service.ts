import { Injectable } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { Contact } from './@core/domain/entity';
import { ContactRepository } from './@core/domain/repository/contact.repository';
import { ContactRepositoryMongo } from './@core/domain/repository/contactMongo.repository';

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
    console.log(contact);
    const newContact = this._repository.create(contact);
    return newContact;
  }
}
