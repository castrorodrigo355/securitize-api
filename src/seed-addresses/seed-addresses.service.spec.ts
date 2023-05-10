import { Test, TestingModule } from '@nestjs/testing';
import { SeedAddressesService } from './seed-addresses.service';

describe('SeedAddressesService', () => {
  let service: SeedAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedAddressesService],
    }).compile();

    service = module.get<SeedAddressesService>(SeedAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
