import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Conversion extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  currency: string;

  @Prop({
    unique: true,
    index: true,
  })
  value: number;
}

export const ConversionSchema = SchemaFactory.createForClass(Conversion);
