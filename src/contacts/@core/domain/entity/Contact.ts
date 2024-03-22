import { ContactDTO } from './Contact.dto';

export type IContactProps = 'ownerId' | 'value' | 'type' | 'status';

export class Contact implements ContactDTO {
  type: string;
  value: string;
  status: string;
  ownerId: string;

  constructor(contactDTO: ContactDTO) {
    this.value = contactDTO.value;
    this.type = contactDTO.type;
    this.status = contactDTO.status;
    this.ownerId = contactDTO.ownerId;
  }
}
