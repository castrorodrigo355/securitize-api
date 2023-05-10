import { Module } from '@nestjs/common';
import { ConversionsService } from './conversions.service';
import { ConversionsController } from './conversions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversion, ConversionSchema } from './entities/conversion.entity';

@Module({
  controllers: [ConversionsController],
  providers: [ConversionsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Conversion.name,
        schema: ConversionSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class ConversionsModule {}
