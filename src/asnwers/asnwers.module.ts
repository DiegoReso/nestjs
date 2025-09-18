import { Module } from '@nestjs/common';
import { AsnwersService } from './asnwers.service';
import { AsnwersController } from './asnwers.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AsnwersController],
  providers: [AsnwersService],
})
export class AsnwersModule {}
