import { GenericUseCase } from '@/@common/generics/generic.useCase';
import { Contact } from '../domain/entity';
import { ContactGenericRepository } from '../domain/repository/contact.repository';

interface IExecuteProps {
  contact: Contact;
}

export class CreateContactsUseCase_4 extends GenericUseCase<
  ContactGenericRepository,
  IExecuteProps
> {
  async execute({ contact }: IExecuteProps) {
    const clientContacts = await this.repository.create(contact);
    return clientContacts;
  }
}
