import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {

   
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
