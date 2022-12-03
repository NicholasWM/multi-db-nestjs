import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { ContactModel } from '@/contacts/@core/infra/db/sequelize/contact.model';
import { ContactModelMySQL } from '@/contacts/@core/infra/db/sequelize/mysql/contact.model';
import { ContactModelPG } from '@/contacts/@core/infra/db/sequelize/pg/contact.model';
import { Module, Logger } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseStackProviders } from './database.provider';

@Module({
  imports: [
    SequelizeModule.forRoot({
      name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT,
      dialect: 'mysql',
      host: 'localhost',
      port: 8801,
      username: 'root',
      password: 'study_projects',
      database: 'backoffice_war_sequelize',
      models: [ContactModelMySQL],
    }),
    SequelizeModule.forRoot({
      name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2,
      dialect: 'postgres',
      host: 'localhost',
      port: 8803,
      username: 'root',
      password: 'study_projects',
      database: 'backoffice_war_sequelize',
      models: [ContactModelPG],
    }),
  ],
  providers: DatabaseStackProviders,
  exports: DatabaseStackProviders,
})
export class DatabaseModule {
  private readonly logger = new Logger(DatabaseModule.name);
  // Pensar em algumas configurações para serem realizadas por aqui
  // Dar log da implementação usada...
  constructor() {
    DatabaseStackProviders.map((d) => {
      this.logger.debug(`Database Connection ${d.provide}`);
    });
  }
}
