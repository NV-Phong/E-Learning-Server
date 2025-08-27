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
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('teacher')
export class TeacherController {
   constructor(private readonly teacherService: TeacherService) {}

   @Post()
   @UseGuards(AuthGuard('jwt'))
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
   @UseGuards(AuthGuard('jwt'))
   update(@Param('id') id: string, @Body() data: Partial<Teacher>) {
      return this.teacherService.update(id, data);
   }

   @Delete(':id')
   @UseGuards(AuthGuard('jwt'))
   remove(@Param('id') id: string) {
      return this.teacherService.remove(id);
   }
}
