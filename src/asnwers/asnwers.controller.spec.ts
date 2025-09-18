import { Test, TestingModule } from '@nestjs/testing';
import { AsnwersController } from './asnwers.controller';
import { AsnwersService } from './asnwers.service';

describe('AsnwersController', () => {
  let controller: AsnwersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsnwersController],
      providers: [AsnwersService],
    }).compile();

    controller = module.get<AsnwersController>(AsnwersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
