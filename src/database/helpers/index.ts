import { getConnectionToken } from '@nestjs/sequelize';

type IORM = 'SEQUELIZE' | 'TYPEORM' | 'MONGOOSE';

export const repositoryBuilderByORM = (repository, orm: IORM) => {
  const getDefaultRepositoryByORM: { [type in IORM]: any } = {
    SEQUELIZE: (modelName) => {
      if ('models' in repository) {
        if (modelName in repository.models) {
          return repository.models[modelName];
        }
        throw Error('model not find in Sequelize models');
      }
      throw Error('model not find in Sequelize object');
    },
    TYPEORM: () => repository,
    MONGOOSE: () => repository,
  };

  const defaultRepository = getDefaultRepositoryByORM[orm];

  return defaultRepository;
};

const buildInjectorSequelize = (injectParam: string) =>
  getConnectionToken(injectParam);

const buildInjectorTypeORM = (injectParam: any) => injectParam;
const buildInjectorMONGOOSE = (injectParam: any) => injectParam;

export const buildInjectorByORM = (injectParam: any, orm: IORM) => {
  const injectorBuilders: { [type in IORM]: any } = {
    SEQUELIZE: buildInjectorSequelize,
    TYPEORM: buildInjectorTypeORM,
    MONGOOSE: buildInjectorMONGOOSE,
  };

  return injectorBuilders[orm](injectParam);
};
