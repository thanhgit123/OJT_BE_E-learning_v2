import { Transform } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from "class-validator"
import { Role } from "src/constant/enum";

export class LoginDto {


    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    
}