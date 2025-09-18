import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AsnwersService } from './asnwers.service';
import { CreateAsnwerDto } from './dto/create-asnwer.dto';
import { UpdateAsnwerDto } from './dto/update-asnwer.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('asnwers')
export class AsnwersController {
  constructor(private readonly asnwersService: AsnwersService) {}

  @UseGuards(AuthGuard)
  @Post(':id')
  create(@Body() createAsnwerDto: CreateAsnwerDto, @Request() req: any, @Param('id') id: string) {
    return this.asnwersService.create(createAsnwerDto, req.sub.sub, +id);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.asnwersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asnwersService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsnwerDto: UpdateAsnwerDto) {
    return this.asnwersService.update(+id, updateAsnwerDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asnwersService.remove(+id);
  }
}
