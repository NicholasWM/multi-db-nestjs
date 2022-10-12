export type ImplementationsTypes = 'inMemory' | 'sequelize';

export type ProviderImplementation = {
  [key in ImplementationsTypes]: any;
};
