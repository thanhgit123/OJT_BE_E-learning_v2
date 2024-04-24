import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsNull } from "typeorm";

export class CreateLessonDto {
  
    create_date: Date
  
    modify_date: Date

    description: string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    video:string

    @IsNumber()
    @IsNotEmpty()
    chapter_id: number

    @IsString()
    @IsNotEmpty()
    document:string
}
