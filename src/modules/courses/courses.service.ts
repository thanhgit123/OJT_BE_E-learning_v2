import { of } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { skip } from 'node:test';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    createCourseDto.create_date = new Date(Date.now());
    createCourseDto.modify_date = new Date(Date.now());
    const { teacher_id } = createCourseDto;
    return await this.courseRepository
      .createQueryBuilder()
      .insert()
      .into(Course)
      .values({
        ...createCourseDto,
        teacher: teacher_id as any,
      })
      .execute();
  }

  async findAll() {
    const result = await this.courseRepository.find({
      relations: ['teacher_id', 'chapters'],
    });
    return result;
  }

  async findOne(id: number) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .innerJoinAndSelect('course.teacher_id', 'teacher')
      .leftJoinAndSelect('course.chapters', 'chapters')
      .leftJoinAndSelect('chapters.lessons', 'lessons')
      .select([
        'chapters',
        'course.title',
        'course.image',
        'course.id',
        'lessons',
        'teacher.name',
        'teacher.specialize',
        'teacher.description',
        'teacher.image',
      ])
      .orderBy('chapters.id', 'ASC')
      .addOrderBy('lessons.id', 'ASC')
      .where('course.id = :id', { id })
      .getOne();
  }

  async findOneCourseAdmin(id: number) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.chapters', 'chapters')
      .leftJoinAndSelect('chapters.lessons', 'lessons')
      .select(['chapters', 'course.title', 'lessons'])
      .orderBy('chapters.id', 'ASC')
      .addOrderBy('lessons.id', 'ASC')
      .where('course.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const { teacher_id } = updateCourseDto;
    return await this.courseRepository
      .createQueryBuilder()
      .update(Course)
      .set({ ...updateCourseDto, teacher: teacher_id as any })
      .where('id = :id', { id })
      .execute();
  }

  async searchCourse(searchValue: any) {
    return await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.teacher_id', 'teacher')
      .where('course.title like :searchValue', {
        searchValue: `%${searchValue}%`,
      })
      .orWhere('course.sub_description like :searchValue', {
        searchValue: `%${searchValue}%`,
      })
      .orWhere('course.description like :searchValue', {
        searchValue: `%${searchValue}%`,
      })
      .getMany();
  }

  async paginationCourse(page: number, limit: number) {
    const result = await this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.teacher_id', 'teacher')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    const total = await this.courseRepository.count();
    const totalPage = Math.ceil(total / limit);
    return {
      data: result,
      itemByPage: +limit,
      total: totalPage,
      totalItem: total,
    };
  }
}
