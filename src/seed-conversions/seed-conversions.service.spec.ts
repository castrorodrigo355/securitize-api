import { Test, TestingModule } from '@nestjs/testing';
import { SeedConversionsService } from './seed-conversions.service';

describe('SeedConversionsService', () => {
  let service: SeedConversionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedConversionsService],
    }).compile();

    service = module.get<SeedConversionsService>(SeedConversionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
