import { Test, TestingModule } from '@nestjs/testing';
import { SeedConversionsController } from './seed-conversions.controller';
import { SeedConversionsService } from './seed-conversions.service';

describe('SeedConversionsController', () => {
  let controller: SeedConversionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedConversionsController],
      providers: [SeedConversionsService],
    }).compile();

    controller = module.get<SeedConversionsController>(
      SeedConversionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
