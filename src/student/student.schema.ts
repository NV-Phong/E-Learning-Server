import { BookingStatus, BookingType } from '@app/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
   _id: Types.ObjectId;

   @Prop({ type: Types.ObjectId, unique: true, ref: 'User' })
   userID: Types.ObjectId;

   @Prop()
   level: string;

   @Prop({ type: [String], default: [] })
   goals: string[];
   @Prop({
      type: [
         {
            teacherID: { type: Types.ObjectId, ref: 'Teacher' },
            courseID: { type: Types.ObjectId, ref: 'Course' },
            status: {
               type: String,
               enum: BookingStatus,
               default: BookingStatus.PENDING,
            },
            type: { type: String, enum: BookingType },
            start: { type: Date },
            end: { type: Date },
            _id: false,
         },
      ],
      default: [],
   })
   booking: {
      teacherID: Types.ObjectId;
      courseID: Types.ObjectId;
      status: BookingStatus;
      type: BookingType;
      start: Date;
      end: Date;
   }[];

   @Prop({ default: false })
   isDeleted: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
