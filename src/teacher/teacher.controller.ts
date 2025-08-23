import { Controller, Get } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from '@app/types';

@Controller('teacher')
export class TeacherController {
   constructor(private readonly teacherService: TeacherService) {}

   @Get()
   async getTeachers(): Promise<Teacher> {
      return this.teacherService.getTeachers();
   }
}
