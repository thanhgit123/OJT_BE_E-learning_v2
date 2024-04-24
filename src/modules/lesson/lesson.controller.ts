import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post('create')
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @Get('list')
  findAll() {
    return this.lessonService.findAll();
  }

  @Get('getLessonByChapter/:id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonService.update(+id, updateLessonDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.lessonService.remove(+id);
  }
}
