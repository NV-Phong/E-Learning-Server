import {
   Controller,
   Get,
   Post,
   Put,
   Delete,
   Param,
   Body,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.schema';

@Controller('teachers')
export class TeacherController {
   constructor(private readonly teacherService: TeacherService) {}

   @Post()
   create(@Body() data: Partial<Teacher>) {
      return this.teacherService.create(data);
   }

   @Get()
   findAll() {
      return this.teacherService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.teacherService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<Teacher>) {
      return this.teacherService.update(id, data);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.teacherService.remove(id);
   }
}
