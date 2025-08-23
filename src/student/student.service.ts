import { Student } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
   async getStudents(): Promise<Student> {
      return {
         _id: '65a7d8f9c2a7b3d54e8a91a1',
         userID: '64f1a8b2e0a5b3a12c9f4d88',
         level: 'Intermediate',
         goals: ['Improve speaking fluency', 'Prepare for IELTS exam'],
         booking: [
            {
               teacherID: '65a7c9e5b8a5d2f23c1d9e77',
               courseID: '65a7d9f6a1c4b2d34c9e10b2',
               status: 'confirmed',
               type: 'paid',
               start: new Date('2025-08-25T09:00:00Z'),
               end: new Date('2025-08-25T10:00:00Z'),
            },
            {
               teacherID: '65a7c9e5b8a5d2f23c1d9e77',
               courseID: '65a7da01e1c5c4f12b9f3a11',
               status: 'pending',
               type: 'trial',
               start: new Date('2025-08-28T14:00:00Z'),
               end: new Date('2025-08-28T15:00:00Z'),
            },
         ],
      };
   }
}
