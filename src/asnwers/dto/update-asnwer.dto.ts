import { PartialType } from '@nestjs/mapped-types';
import { CreateAsnwerDto } from './create-asnwer.dto';

export class UpdateAsnwerDto extends PartialType(CreateAsnwerDto) {
    title: string
    body: string
}
