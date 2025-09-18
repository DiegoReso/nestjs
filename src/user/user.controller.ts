import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {

    @Inject()
    private readonly userService: UserService;


    @Post()
    async singupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise<User> {
        return this.userService.createUser(userData);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<Omit<User, 'password'>> {
        const data = await this.userService.getUserById({ id: Number(id) });
        if (!data) {
            throw new NotFoundException(`User with id ${id} not found!`);
        }

        const { password, ...user } = data;
        return user;
    }

    
    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userData: Prisma.UserUpdateInput
    ): Promise<User> {
        const user = await this.userService.updateUser({
            where: { id: Number(id) }, data: userData
        })

        return user;
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser({ id: Number(id) })
    }

}
