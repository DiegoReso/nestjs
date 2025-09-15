import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';

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

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        const user = await this.userService.getUserById({ id: Number(id) });
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found!`);
        }

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
        return this.userService.deleteUser({id: Number(id)})
    }

}
