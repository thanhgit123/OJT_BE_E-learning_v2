import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { Chapter } from './entities/chapter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ChapterController],
  providers: [ChapterService],
  imports: [TypeOrmModule.forFeature([Chapter])],
  exports: [ChapterService],
})
export class ChapterModule {}
