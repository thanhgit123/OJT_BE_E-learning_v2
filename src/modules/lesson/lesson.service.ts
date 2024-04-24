import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) {}
  async create(createLessonDto: CreateLessonDto) {
    createLessonDto.create_date = new Date(Date.now());
    createLessonDto.modify_date = new Date(Date.now());
    const{chapter_id} = createLessonDto
    return await this.lessonRepository
      .createQueryBuilder()
      .insert()
      .into(Lesson)
      .values({
        ...createLessonDto,
        chapter: chapter_id as any
      })  
      .execute();
  }

  async findAll() {
    return await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.chapter', 'chapter')
      .select([ 'lesson', 'chapter.id'])
      .getMany();
  }

  async findOne(id: number) {
    return await this.lessonRepository
    .createQueryBuilder('lesson')
    .leftJoinAndSelect('lesson.chapter', 'chapter')
    .select([ 'lesson', 'chapter.id'])
    .where('chapter.id = :id', { id })
    .getMany()
  }

   async update(id: number, updateLessonDto: UpdateLessonDto) {
    return await this.lessonRepository
      .createQueryBuilder()
      .update(Lesson)
      .set({ ...updateLessonDto})
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.lessonRepository
      .createQueryBuilder()
      .delete()
      .from(Lesson)
      .where('id = :id', { id })
      .execute();
  }
}
