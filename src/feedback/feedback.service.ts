import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback, FeedbackDocument } from './feedback.schema';

@Injectable()
export class FeedbackService {
   constructor(
      @InjectModel(Feedback.name)
      private feedbackModel: Model<FeedbackDocument>,
   ) {}

   async create(data: Partial<Feedback>): Promise<Feedback> {
      return new this.feedbackModel(data).save();
   }

   async findAll(): Promise<Feedback[]> {
      return this.feedbackModel
         .find({ isDeleted: false })
         .populate('teacherID studentID')
         .exec();
   }

   async findOne(id: string): Promise<Feedback> {
      const feedback = await this.feedbackModel.findById(id).exec();
      if (!feedback || feedback.isDeleted) throw new NotFoundException();
      return feedback;
   }

   async update(id: string, data: Partial<Feedback>): Promise<Feedback> {
      const updated = await this.feedbackModel.findByIdAndUpdate(id, data, {
         new: true,
      });
      if (!updated) throw new NotFoundException();
      return updated;
   }

   async remove(id: string): Promise<void> {
      const res = await this.feedbackModel.findByIdAndUpdate(id, {
         isDeleted: true,
      });
      if (!res) throw new NotFoundException();
   }
}
