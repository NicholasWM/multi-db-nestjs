import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ContactsModule } from './contacts/contacts.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from './database/database.module';
import configuration from './@common/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SchedulingModule,
    ContactsModule,
    ClientModule,
    DatabaseModule,
  ],
})
export class AppModule {}
