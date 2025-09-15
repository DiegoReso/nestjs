import { Body, Controller, Get, Inject, NotFoundException, Param, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    @Inject()
    private readonly userService: UserService;


    @Post('signup')
    async singupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise<User> {
        return this.userService.createUser(userData);
    }

    @Get(':id')
    async getUserById(@Param('id') id: Number): Promise<User> {
        const user = await this.userService.getUserById({ id: Number(id) });
        if(!user){
            throw new NotFoundException(`User with id ${id} not found!`);
        }

        return user;
    }

}
