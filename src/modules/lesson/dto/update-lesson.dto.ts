import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
    
    
    description: string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    video:string

    @IsString()
    @IsNotEmpty()
    document:string
}
