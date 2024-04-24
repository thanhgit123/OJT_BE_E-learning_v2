import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateChapterDto {

    
    create_date: Date;

    modify_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    title:string

    @IsNumber()
    @IsNotEmpty()
    course_id:number
}
