import { Test, TestingModule } from '@nestjs/testing';
import { SeedAddressesController } from './seed-addresses.controller';
import { SeedAddressesService } from './seed-addresses.service';

describe('SeedAddressesController', () => {
  let controller: SeedAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedAddressesController],
      providers: [SeedAddressesService],
    }).compile();

    controller = module.get<SeedAddressesController>(SeedAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
