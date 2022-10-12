import { IContactProps } from '@/contacts/@core/domain/entity';

export type IQuery = {
  [key in IContactProps]?: any;
};
