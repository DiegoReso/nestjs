import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    @Inject()
    private readonly userService: UserService;


    @Post()
    async singupUser(
       @Body(new ValidationPipe()) userData: CreateUserDTO,
    ): Promise<User> {
        return this.userService.createUser(userData);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number): Promise<Omit<User, 'password'>> {
        const data = await this.userService.getUserById({ id });
        if (!data) {
            throw new NotFoundException(`User with id ${id} not found!`);
        }

        const { password, ...user } = data;
        return user;
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body(new ValidationPipe()) userData: UpdateUserDTO
    ): Promise<User> {
        const user = await this.userService.updateUser({
            where: { id }, data: userData
        })

        return user;
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.deleteUser({ id })
    }

}
