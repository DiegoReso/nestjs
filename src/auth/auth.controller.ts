import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { sign } from 'crypto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @Inject()
    private readonly authService: AuthService;


    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() body: Prisma.UserCreateInput){
        return this.authService.singin(body);
    }


}
