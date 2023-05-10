import { Module } from '@nestjs/common';
import { SeedConversionsService } from './seed-conversions.service';
import { SeedConversionsController } from './seed-conversions.controller';
import { AddressesModule } from '../addresses/addresses.module';
import { CommonModule } from '../common/common.module';
import { ConversionsModule } from '../conversions/conversions.module';

@Module({
  controllers: [SeedConversionsController],
  providers: [SeedConversionsService],
  imports: [AddressesModule, CommonModule, ConversionsModule],
})
export class SeedConversionsModule {}
