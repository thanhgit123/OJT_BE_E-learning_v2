import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTeacherDto {
   
    
    create_date: Date;
    
    modify_date: Date;


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    specialize: string;


    @IsString()
    @IsNotEmpty()
    image: string;

    
}
