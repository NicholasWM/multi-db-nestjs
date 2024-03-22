import { v4 as uuid } from 'uuid';
import { GenericRepository } from '@/@common/generics/generic.repository';

interface IOptions {
  includes: any[];
  offset: number;
  skip: number;
}

export class GenericInMemoryRepository<T, IQuery>
  implements GenericRepository<T, IQuery, IOptions>
{
  _data: any[];

  constructor() {
    this._data = [] as T[];
  }

  async findAll(query?: any, options?: any): Promise<T[]> {
    return new Promise((resolve) => {
      resolve(this._data);
    });
  }
  async create(instance: T, options?: any): Promise<any> {
    return new Promise((resolve) => {
      const newData = { ...instance, id: uuid() };
      this._data.push(newData);
      resolve(newData);
    });
  }

  get model(): T {
    throw new Error('Method not implemented.');
  }

  findOne(
    query: { ownerId?: any; value?: any; type?: any; status?: any },
    options?: any,
  ): Promise<T> {
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
  update(instance: T, options?: any) {
    throw new Error('Method not implemented.');
  }
  findOrCreate(
    query: { ownerId?: any; value?: any; type?: any; status?: any },
    options?: any,
  ) {
    throw new Error('Method not implemented.');
  }
}
