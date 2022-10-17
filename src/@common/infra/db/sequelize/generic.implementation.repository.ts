import { ModelCtor, Model } from 'sequelize-typescript';
import { GenericRepository } from '@/@common/generics/generic.repository';
import { FindOptions } from 'sequelize';

interface IOptions extends FindOptions {
  includes: any[];
  offset: number;
  skip: number;
  attributtes: any[];
  order: any;
  group: any;
  where: any;
}

export class GenericSequelizeRepository<T, IQuery, TAttributes, TOptions>
  implements GenericRepository<T, IQuery, IOptions>
{
  _model: ModelCtor<Model<TAttributes, TOptions>>;
  constructor(model: ModelCtor<Model<TAttributes, TOptions>>) {
    this._model = model;
  }
  get model(): ModelCtor<Model<TAttributes, TOptions>> {
    return this._model;
  }
  create(instance: T): any {
    console.log('Sequelize Implementation');
    return this._model.create(instance as any);
  }
  findAll(query?: IQuery, options?: IOptions): Promise<T[]> {
    console.log('Sequelize Implementation');
    return this.model.findAll({
      where: query,
      ...options,
    }) as any;
  }
  findOne(query: IQuery, options?: IOptions): Promise<T> {
    console.log('Sequelize Implementation');
    return this.model.findOne({
      where: query,
      ...options,
    }) as any;
  }
  findById(id: any): Promise<T> {
    return this.model.findByPk(id) as any;
  }
  updateById(id: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  removeById(id: any) {
    throw new Error('Method not implemented.');
  }
  update(instance: T, options?: IOptions) {
    throw new Error('Method not implemented.');
  }
  findOrCreate(query: IQuery, options?: IOptions) {
    throw new Error('Method not implemented.');
  }
}
