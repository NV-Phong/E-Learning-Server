import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
   _id: Types.ObjectId;

   @Prop({ required: true })
   title: string;

   @Prop()
   description: string;

   @Prop({ required: true, min: 0 })
   price: number;

   @Prop({ required: true, min: 1 })
   sessions: number;

   @Prop({ required: true, min: 1 })
   durationMonths: number;

   @Prop({ default: false })
   isDeleted: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
