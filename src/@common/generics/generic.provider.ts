export interface IOrmAvailableDataSources {
  IN_MEMORY: 'IN_MEMORY_DATA_SOURCE';
  SEQUELIZE: 'SEQUELIZE_DATA_SOURCE';
  TYPEORM: 'TYPEORM_DATA_SOURCE';
  MONGOOSE: 'MONGOOSE_DATA_SOURCE';
}

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
