import { GenericUseCase } from '@/@common/generics/generic.useCase';
import { ContactRepository } from '../domain/repository/contact.repository';

interface IExecuteProps {
  clientId: string;
}

export class FindAllContactsUseCase extends GenericUseCase<
  ContactRepository,
  IExecuteProps
> {
  async execute() {
    const clientContacts = await this.repository.findAll();
    return clientContacts;
  }
}
