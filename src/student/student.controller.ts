import {
   Controller,
   Get,
   Post,
   Put,
   Delete,
   Param,
   Body,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('students')
export class StudentController {
   constructor(private readonly studentService: StudentService) {}

   @Post()
   create(@Body() data: Partial<Student>) {
      return this.studentService.create(data);
   }

   @Get()
   findAll() {
      return this.studentService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.studentService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<Student>) {
      return this.studentService.update(id, data);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.studentService.remove(id);
   }
}
