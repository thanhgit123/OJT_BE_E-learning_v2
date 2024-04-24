import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports:[TypeOrmModule.forFeature([Course])],
  exports:[CoursesService]
})
export class CoursesModule {}
