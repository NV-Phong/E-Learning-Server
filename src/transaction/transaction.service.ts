import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './transaction.schema';

@Injectable()
export class TransactionService {
   constructor(
      @InjectModel(Transaction.name)
      private transactionModel: Model<TransactionDocument>,
   ) {}

   async create(data: Partial<Transaction>): Promise<Transaction> {
      return new this.transactionModel(data).save();
   }

   async findAll(): Promise<Transaction[]> {
      return this.transactionModel
         .find({ isDeleted: false })
         .populate('courseID studentID')
         .exec();
   }

   async findOne(id: string): Promise<Transaction> {
      const trx = await this.transactionModel.findById(id).exec();
      if (!trx || trx.isDeleted) throw new NotFoundException();
      return trx;
   }

   async update(id: string, data: Partial<Transaction>): Promise<Transaction> {
      const updated = await this.transactionModel.findByIdAndUpdate(id, data, {
         new: true,
      });
      if (!updated) throw new NotFoundException();
      return updated;
   }

   async remove(id: string): Promise<void> {
      const res = await this.transactionModel.findByIdAndUpdate(id, {
         isDeleted: true,
      });
      if (!res) throw new NotFoundException();
   }
}
