import {
   Controller,
   Get,
   Post,
   Put,
   Delete,
   Param,
   Body,
   UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('course')
@UseGuards(AuthGuard('jwt'))
export class CourseController {
   constructor(private readonly courseService: CourseService) {}

   @Post()
   create(@Body() data: Partial<Course>) {
      return this.courseService.create(data);
   }

   @Get()
   findAll() {
      return this.courseService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.courseService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<Course>) {
      return this.courseService.update(id, data);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.courseService.remove(id);
   }
}
