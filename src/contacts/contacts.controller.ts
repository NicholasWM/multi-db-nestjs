import { Controller, Get } from '@nestjs/common';
import { Contact } from './@core/domain/entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  defaultContact: Contact = {
    type: 'phone',
    value: '1231232',
    ownerId: '1',
    status: 'active',
  };

  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll() {
    const payload = await this.contactsService.findAll();
    return payload;
  }

  @Get('add')
  async add() {
    const payload = await this.contactsService.createWithService(
      this.defaultContact,
    );
    return payload;
  }

  @Get('add1')
  async add1() {
    const payload = await this.contactsService.createWithUseCase(
      this.defaultContact,
    );
    return payload;
  }

  @Get('add2')
  async add2() {
    const payload = await this.contactsService.createWithUseCase_2(
      this.defaultContact,
    );
    return payload;
  }
  @Get('add3')
  async add3() {
    const payload = await this.contactsService.createWithUseCase_3(
      this.defaultContact,
    );
    return payload;
  }
  @Get('add4')
  async add4() {
    const payload = await this.contactsService.createWithUseCase_4(
      this.defaultContact,
    );
    return payload;
  }
}
