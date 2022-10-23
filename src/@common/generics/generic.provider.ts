export interface IOrmAvailableDataSources {
  IN_MEMORY: 'IN_MEMORY_DATA_SOURCE';
  SEQUELIZE: 'SEQUELIZE_DATA_SOURCE';
  TYPEORM: 'TYPEORM_DATA_SOURCE';
  MONGOOSE: 'MONGOOSE_DATA_SOURCE';
}

export const ORM_AVAILABLE_DATA_SOURCES_ORM: IOrmAvailableDataSources = {
  IN_MEMORY: 'IN_MEMORY_DATA_SOURCE',
  SEQUELIZE: 'SEQUELIZE_DATA_SOURCE',
  TYPEORM: 'TYPEORM_DATA_SOURCE',
  MONGOOSE: 'MONGOOSE_DATA_SOURCE',
};

type TSequelizeDataSources = 'SEQ_DB_1' | 'SEQ_DB_2';
type TTypeORMDataSources = 'TYPE_DB_1' | 'TYPE_DB_2';
type TMongooseDataSources = 'MON_DB_1' | 'MON_DB_2';

export interface IAvailableDataSourcesByORM {
  IN_MEMORY: { [key: string]: string };
  SEQUELIZE: { [key: string]: TSequelizeDataSources };
  TYPEORM: { [key: string]: TTypeORMDataSources };
  MONGOOSE: { [key: string]: TMongooseDataSources };
}

export const AVAILABLE_DATA_SOURCES = {
  IN_MEMORY: {},
  SEQUELIZE: {
    DEFAULT: 'SEQ_DB_1',
    DB_2: 'SEQ_DB_2',
  },
  TYPEORM: {
    DEFAULT: 'TYPE_DB_1',
    DB_2: 'TYPE_DB_2',
  },
  MONGOOSE: {
    DEFAULT: 'MON_DB_1',
    DB_2: 'MON_DB_2',
  },
};

export const ORM_AVAILABLE_DATA_SOURCES: IOrmAvailableDataSources = {
  IN_MEMORY: 'IN_MEMORY_DATA_SOURCE',
  SEQUELIZE: 'SEQUELIZE_DATA_SOURCE',
  TYPEORM: 'TYPEORM_DATA_SOURCE',
  MONGOOSE: 'MONGOOSE_DATA_SOURCE',
};

export type DataSourceImplementationTypes =
  | IOrmAvailableDataSources['IN_MEMORY']
  | IOrmAvailableDataSources['SEQUELIZE']
  | IOrmAvailableDataSources['TYPEORM']
  | IOrmAvailableDataSources['MONGOOSE'];

export type ProviderImplementation = {
  [key in DataSourceImplementationTypes]: any;
};
