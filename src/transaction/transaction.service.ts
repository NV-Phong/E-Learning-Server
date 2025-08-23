import { Transaction } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
   async getTransaction(): Promise<Transaction> {
      return {
         _id: '65a7e2f9b2c9d3f12e8a91b0',
         courseID: '65a7db92f8b2c4d12e9a77b3',
         studentID: '65a7d8f9c2a7b3d54e8a91a1',
         status: 'paid',
         paymentMethod: 'Credit Card',
         createdAt: new Date('2025-08-23T09:30:00Z'),
         isDeleted: false,
      };
   }
}
