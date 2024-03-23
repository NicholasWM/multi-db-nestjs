import { ApiProperty } from '@nestjs/swagger';

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

  id?: string;
}
