import { Course } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
   async getCourses(): Promise<Course> {
      return {
         _id: '65a7db92f8b2c4d12e9a77b3',
         title: 'IELTS Preparation Course',
         description:
            'Comprehensive IELTS course focusing on all four skills: Listening, Reading, Writing, and Speaking.',
         price: 300,
         sessions: 20,
         durationMonths: 3,
         isDeleted: false,
      };
   }
}
