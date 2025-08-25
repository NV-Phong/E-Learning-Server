import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema({ timestamps: true })
export class Feedback {
   _id: Types.ObjectId;

   @Prop({ type: Types.ObjectId, ref: 'Teacher' })
   teacherID: Types.ObjectId;

   @Prop({ type: Types.ObjectId, ref: 'Student' })
   studentID: Types.ObjectId;

   @Prop({ min: 1, max: 5 })
   rating: number;

   @Prop()
   comment: string;

   @Prop({ default: false })
   isDeleted: boolean;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
