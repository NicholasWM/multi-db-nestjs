import { GenericUseCase } from '@/@common/generics/generic.useCase';
import { ContactGenericRepository } from '../domain/repository/contact.repository';

interface IExecuteProps {
  clientId: string;
}

export class FindAllContactsUseCase extends GenericUseCase<
  ContactGenericRepository,
  IExecuteProps
> {
  async execute() {
    const clientContacts = await this.repository.findAll();
    return clientContacts;
  }
}
