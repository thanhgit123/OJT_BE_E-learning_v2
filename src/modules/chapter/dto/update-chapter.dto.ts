import { PartialType } from '@nestjs/mapped-types';
import { CreateChapterDto } from './create-chapter.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateChapterDto extends PartialType(CreateChapterDto) {
   

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    title:string

}
