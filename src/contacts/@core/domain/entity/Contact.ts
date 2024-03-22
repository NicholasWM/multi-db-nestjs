import { ApiProperty } from '@nestjs/swagger';

export type IContactProps = 'ownerId' | 'value' | 'type' | 'status';

export class ContactDTO {
  @ApiProperty({
    default: 'testId',
  })
  ownerId: string;

  @ApiProperty({
    default: 'Jorge da Silva',
  })
  value: string;

  @ApiProperty({
    default: 'Cellphone',
  })
  type: string;

  @ApiProperty({
    default: true,
  })
  status: string;

  @ApiProperty({
    default: 'testId',
  })
  id?: string;
}

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
