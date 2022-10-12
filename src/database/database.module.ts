import { Module } from '@nestjs/common';
import { saveLocation } from '@/@common/constants';
import { databaseProviders } from './config/database.provider';
import { ContactModel } from '@/contacts/@core/infra/db/sequelize/contact.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [...databaseProviders[saveLocation]],
  exports: [...databaseProviders[saveLocation]],
})
export class DatabaseModule {}
