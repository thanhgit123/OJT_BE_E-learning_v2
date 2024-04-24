import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { serialize } from 'v8';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post('create')
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chapterService.create(createChapterDto);
  }

  @Get('list/:id')
  findAll(@Param('id') id: string) {
    return this.chapterService.findAll(+id);
  }

  @Get('getChapterByCourseId/:id')
  findOne(@Param('id') id: string) {
    return this.chapterService.findOne(+id);
  }

  @Get('search')
  search(@Query('query') searchValue: any) {
    return this.chapterService.search(searchValue);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateChapterDto: UpdateChapterDto) {
    return this.chapterService.update(+id, updateChapterDto);
  }
}
