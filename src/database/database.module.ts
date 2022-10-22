import { Module } from '@nestjs/common';
import { saveLocation } from '@/@common/constants';
import { databaseProviders } from './database.provider';
@Module({
  providers: [
    ...databaseProviders[saveLocation],
    ...databaseProviders['mongoose'],
  ],
  exports: [
    ...databaseProviders[saveLocation],
    ...databaseProviders['mongoose'],
  ],
})
export class DatabaseModule {}
