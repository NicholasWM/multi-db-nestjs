import { Module } from '@nestjs/common';
import { saveLocation } from '@/@common/constants';
import { databaseProviders } from './database.provider';
@Module({
  providers: [...databaseProviders[saveLocation]],
  exports: [...databaseProviders[saveLocation]],
})
export class DatabaseModule {}
