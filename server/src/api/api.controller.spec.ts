import { Test, TestingModule } from '@nestjs/testing';
import { ApisController } from './api.controller';
import { ApisService } from './api.service';

describe('ApisController', () => {
  let controller: ApisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApisController],
      providers: [ApisService],
    }).compile();

    controller = module.get<ApisController>(ApisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
