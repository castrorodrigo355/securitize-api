import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversion } from './entities/conversion.entity';

@Injectable()
export class ConversionsService {
  constructor(
    @InjectModel(Conversion.name)
    private readonly conversionModel: Model<Conversion>,
  ) {}

  async findAll() {
    return await this.conversionModel.find();
  }
}
