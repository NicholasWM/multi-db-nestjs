import {
  GenericRepository,
  IOptionsGeneric,
} from '@Common/generics/generic.repository';
import { Client, IClientProps } from '../entity';

type IQuery = {
  [key in IClientProps]?: any;
};
export abstract class ClientRepository extends GenericRepository<
  Client,
  IQuery,
  IOptionsGeneric
> {}
