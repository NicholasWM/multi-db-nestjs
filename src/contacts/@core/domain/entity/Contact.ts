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
  status: string;

  ownerId: string;
  constructor(
    readonly value: string, // info
    readonly type: string, // description
    status?: string,
    ownerId?: string,
  ) {
    if (ownerId) this.ownerId = ownerId;
    if (status) this.status = status;
  }
}
