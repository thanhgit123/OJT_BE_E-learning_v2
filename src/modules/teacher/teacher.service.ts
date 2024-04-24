import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>) {}
  async create(createTeacherDto: CreateTeacherDto) {
    createTeacherDto.create_date = new Date(Date.now());
    createTeacherDto.modify_date = new Date(Date.now());
    return await this.teacherRepository
    .createQueryBuilder()
    .insert()
    .into(Teacher)
    .values(createTeacherDto) 
    .execute();
  }

  async findAll() {
    const result =  await this.teacherRepository.find({
    })
    return result
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.teacherRepository
    .createQueryBuilder()
    .update(Teacher)
    .set(updateTeacherDto)
    .where('id = :id', { id })
    .execute(); 
  }
}
