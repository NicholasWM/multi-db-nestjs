import { Controller } from '@nestjs/common';
import { ClientService } from './client.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('# Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
}
