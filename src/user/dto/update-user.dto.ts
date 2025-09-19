import { PartialType } from "@nestjs/mapped-types"
import { CreateUserDTO } from "./create-user.dto"
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @MinLength(6)
    @IsNotEmpty()
    @IsString()
    password: string
}