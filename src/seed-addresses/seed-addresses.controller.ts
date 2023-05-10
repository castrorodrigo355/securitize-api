import { Controller, Get } from '@nestjs/common';
import { SeedAddressesService } from './seed-addresses.service';

@Controller('seed-addresses')
export class SeedAddressesController {
  constructor(private readonly seedAddressesService: SeedAddressesService) {}

  @Get()
  findAll() {
    return this.seedAddressesService.addressesSeed();
  }
}
