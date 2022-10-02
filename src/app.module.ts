import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ContactsModule } from './contacts/contacts.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [SchedulingModule, ContactsModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
