import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transaction } from '../../seed-addresses/interfaces/transaction-response.interface';

@Schema()
export class Address extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  account: string;

  @Prop({
    index: true,
  })
  balance: string;

  @Prop({
    index: true,
    default: false,
  })
  favorite: boolean;

  @Prop({
    nullable: true,
  })
  firstTx: number | null;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
