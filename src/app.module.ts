import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './modules/users/users.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { CoursesModule } from './modules/courses/courses.module';
import { ChapterModule } from './modules/chapter/chapter.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),
    UsersModule, TeacherModule, LessonModule, CoursesModule,ChapterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
