import { FindOptions } from 'sequelize';
import { ModelCtor, Model } from 'sequelize-typescript';
import { GenericRepository } from '@/@common/generics/generic.repository';

interface IOptions extends FindOptions {
  includes: any[];
  offset: number;
  skip: number;
  attributtes: any[];
  order: any;
  group: any;
  where: any;
}

// Type `ModelType` would basically wrap & satisfy the 'this' context of any sequelize helper methods
type Constructor<T> = new (...args: any[]) => T;
type ModelType<T extends Model<T>> = Constructor<T> & typeof Model;

export class GenericSequelizeRepository<T, IQuery, TAttributes, TOptions>
  implements GenericRepository<T, IQuery, IOptions>
{
  // _model: ModelType<T extends Model<T>>
  constructor(readonly _model: any) {
    // this._model = model;
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
