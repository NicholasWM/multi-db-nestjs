import { Sequelize } from 'sequelize-typescript';
import { ContactModel } from '@/contacts/@core/infra/db/sequelize/contact.model';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContactModelMySQL } from '@/contacts/@core/infra/db/sequelize/mysql/contact.model';
import { ContactModelPG } from '@/contacts/@core/infra/db/sequelize/pg/contact.model';

// export const connectionSource = new Sequelize({
//   define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT } },
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 8801,
//   username: 'root',
//   password: 'study_projects',
//   database: 'backoffice_war_sequelize',
//   dialectOptions: {
//     application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT,
//   },
// });

// export const connectionSourcePg = new Sequelize({
//   define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2 } },
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 8803,
//   username: 'root',
//   password: 'study_projects',
//   database: 'backoffice_war_sequelize',
//   dialectOptions: {
//     application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2,
//   },
// });

export const sequelizeDatabaseProviders = [

];
