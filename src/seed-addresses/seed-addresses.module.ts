import { Module } from '@nestjs/common';
import { SeedAddressesService } from './seed-addresses.service';
import { SeedAddressesController } from './seed-addresses.controller';
import { AddressesModule } from './../addresses/addresses.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedAddressesController],
  providers: [SeedAddressesService],
  imports: [AddressesModule, CommonModule],
})
export class SeedAddressesModule {}
