export type ImplementationsTypes =
  | 'inMemory'
  | 'sequelize'
  | 'typeorm'
  | 'mongoose';

export type ProviderImplementation = {
  [key in ImplementationsTypes]: any;
};
