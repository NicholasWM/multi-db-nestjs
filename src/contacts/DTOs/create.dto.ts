import { ApiProperty } from '@nestjs/swagger';
import { IContactAttributes } from '../@core/domain/entity';

export class CreateContactDTO implements IContactAttributes {
  @ApiProperty({
    default: 'testeId',
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
}
