import { Test, TestingModule } from '@nestjs/testing';
import { AsnwersService } from './asnwers.service';

describe('AsnwersService', () => {
  let service: AsnwersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsnwersService],
    }).compile();

    service = module.get<AsnwersService>(AsnwersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
