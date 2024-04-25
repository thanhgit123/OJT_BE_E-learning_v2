import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, Matches } from "class-validator";

export class RegisterDto {

    create_date: Date;

    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    full_name: string;

    @IsString()
    @Matches(/((09|03|07|08|05)+([0-9]{8})\b)/ , { message: 'Phone not valid' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    
}