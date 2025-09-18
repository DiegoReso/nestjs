import { Inject, Injectable } from '@nestjs/common';
import { CreateAsnwerDto } from './dto/create-asnwer.dto';
import { UpdateAsnwerDto } from './dto/update-asnwer.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AsnwersService {

  @Inject()
  private readonly prisma: PrismaService;

  async create(createAsnwerDto: CreateAsnwerDto, userId: number, questionId: number) {
    return await this.prisma.answers.create({
      data: { ...createAsnwerDto, userId, questionId }
    })
  }

  async findAll() {
    return await this.prisma.answers.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.answers.findUnique({ where: { id } })
  }

  async update(id: number, updateAsnwerDto: UpdateAsnwerDto) {
    return await this.prisma.answers.update({
      where: { id },
      data: updateAsnwerDto
    })
  }

  async remove(id: number) {
    return await this.prisma.answers.delete({ where: { id } })
  }
}
