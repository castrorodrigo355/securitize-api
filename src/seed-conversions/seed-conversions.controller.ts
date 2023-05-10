import { Controller, Get } from '@nestjs/common';
import { SeedConversionsService } from './seed-conversions.service';

@Controller('seed-conversions')
export class SeedConversionsController {
  constructor(
    private readonly seedConversionsService: SeedConversionsService,
  ) {}

  @Get()
  conversionsSeed() {
    return this.seedConversionsService.conversionsSeed();
  }
}
