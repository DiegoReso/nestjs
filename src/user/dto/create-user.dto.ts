import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDTO {
    @IsString({ message: "The name must be a string" })
    @MinLength(3, { message: "The name must be at least 3 characters long." })
    @IsNotEmpty({ message: "The name cannot be empty" })
    name: string

    @IsEmail({}, { message: "The email must be a valid email address." })
    @IsNotEmpty({ message: "The email cannot be empty" })
    email: string

    @IsString({ message: "The password must be a string." })
    @MinLength(6, { message: "The password must be at least 6 characters long." })
    @IsNotEmpty({ message: "The password cannot be empty." })
    password: string
}