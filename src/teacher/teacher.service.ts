import { Teacher } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
   async getTeachers(): Promise<Teacher> {
      return {
         _id: '65a7c9e5b8a5d2f23c1d9e77',
         userID: '64f1a8b2e0a5b3a12c9f4d88',
         bio: 'Passionate English teacher with a focus on conversational fluency.',
         experienceYears: 5,
         certifications: ['TESOL', 'IELTS Trainer'],
         hourlyRate: 25,
         isDeleted: false,
         rating: {
            average: 4.8,
            count: 120,
         },
         availability: [
            {
               start: new Date('2025-08-25T08:00:00Z'),
               end: new Date('2025-08-25T10:00:00Z'),
            },
            {
               start: new Date('2025-08-26T14:00:00Z'),
               end: new Date('2025-08-26T16:00:00Z'),
            },
         ],
      };
   }
}
