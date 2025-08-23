import { Feedback } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedbackService {
   async getFeedback(): Promise<Feedback> {
      return {
         _id: '65a7df82e2b9f4d45c8a91f0',
         teacherID: '65a7c9e5b8a5d2f23c1d9e77',
         studentID: '65a7d8f9c2a7b3d54e8a91a1',
         rating: 5,
         comment: 'Great teacher! Helped me improve my speaking fluency a lot.',
         createdAt: new Date('2025-08-20T10:00:00Z'),
         updatedAt: new Date('2025-08-22T15:30:00Z'),
         isDeleted: false,
      };
   }
}
