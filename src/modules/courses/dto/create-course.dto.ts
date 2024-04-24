import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  
  create_date: Date;

  modify_date: Date;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  sub_description: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;
}
