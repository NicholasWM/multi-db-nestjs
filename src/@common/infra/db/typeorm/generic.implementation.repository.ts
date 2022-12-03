import { GenericRepository } from '@/@common/generics/generic.repository';
import { Repository } from 'typeorm';

interface IOptions {
  includes: any[];
  offset: number;
  skip: number;
}

export class GenericTypeOrmRepository<T, IQuery>
  implements GenericRepository<T, IQuery, IOptions>
{
  get model(): Repository<T> {
    throw new Error('Method not implemented.');
  }
  create(instance: T, options?: IOptions): Promise<void> {
    throw new Error('INSERT INTO ....');
  }
  findAll(query?: IQuery, options?: IOptions): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(query: IQuery, options?: IOptions): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findById(id: any): Promise<T> {
    throw new Error('Method not implemented.');
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
