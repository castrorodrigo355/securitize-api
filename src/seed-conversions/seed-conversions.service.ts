import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversion } from '../conversions/entities/conversion.entity';

@Injectable()
export class SeedConversionsService {
  constructor(
    @InjectModel(Conversion.name)
    private readonly conversionModel: Model<Conversion>,
  ) {}

  async conversionsSeed() {
    await this.conversionModel.deleteMany({});
    await this.conversionModel.insertMany([
      { currency: 'USD', value: 100 },
      { currency: 'EUR', value: 105 },
    ]);
    return 'Conversions saved.';
  }
}
