import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Repository } from 'typeorm';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly courseRepository: Repository<Chapter>,  
  ) {}
  async create(createChapterDto: CreateChapterDto) {
    createChapterDto.create_date = new Date(Date.now());
    createChapterDto.modify_date = new Date(Date.now());
    const {course_id} = createChapterDto
    return await this.courseRepository
      .createQueryBuilder()
      .insert()
      .into(Chapter)
      .values({
        ...createChapterDto,
        course: course_id as any
      })
      .execute();
  }

  async findAll(id:number) {
    const result = await this.courseRepository
      .createQueryBuilder('chapter')  
      .innerJoinAndSelect('chapter.course', 'course')
      .innerJoinAndSelect('chapter.lessons', 'lessons')
      .select([ 'chapter', 'lessons', 'course.title'])
      .where('course.id = :id', { id })
      .getMany();
    return result;
  }

  async findOne(id: number) {
    return await this.courseRepository
      .createQueryBuilder('chapter')
      .innerJoinAndSelect('chapter.course', 'course')
      .innerJoinAndSelect('chapter.lessons', 'lessons')
      .where('course.id = :id', { id })
      .getOne();
  }

  async search(searchValue: any) {
    console.log(searchValue)
    return await this.courseRepository
      .createQueryBuilder('chapter')
      .where('chapter.title like :searchValue', { searchValue: `%${searchValue}%` })
      .getMany();
  }

  async update(id: number, updateChapterDto: UpdateChapterDto) {
    return await this.courseRepository
      .createQueryBuilder()
      .update(Chapter)
      .set({ ...updateChapterDto, })  
      .where('id = :id', { id })
      .execute();
  }
}
