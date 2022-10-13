export type ImplementationsTypes = 'inMemory' | 'sequelize' | 'typeorm';

export type ProviderImplementation = {
  [key in ImplementationsTypes]: any;
};
