import mongoose, { Model } from 'mongoose';
import { Contact, ContactDTO } from '@/contacts/@core/domain/entity';

export class ContactDocument extends Model<Contact> {
  readonly ownerId: string;
  readonly value: string;
  readonly type: string;
  readonly status: string;
}

export const ContactSchema = new mongoose.Schema<ContactDTO>({
  id: String,
  value: String,
  type: String,
  status: String,
  ownerId: String,
});
