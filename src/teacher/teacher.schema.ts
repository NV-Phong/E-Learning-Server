import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema({ timestamps: true })
export class Teacher {
   _id: Types.ObjectId;

   @Prop({ type: Types.ObjectId, unique: true, ref: 'User' })
   userID: Types.ObjectId;

   @Prop()
   bio: string;

   @Prop()
   experienceYears: number;

   @Prop({ type: [String], default: [] })
   certifications: string[];

   @Prop()
   hourlyRate: number;

   @Prop({ default: false })
   isDeleted: boolean;

   @Prop({
      type: {
         average: { type: Number, default: 0 },
         count: { type: Number, default: 0 },
      },
      _id: false,
      default: { average: 0, count: 0 },
   })
   rating: {
      average: number;
      count: number;
   };

   @Prop({
      type: [
         {
            start: { type: Date },
            end: { type: Date },
            _id: false,
         },
      ],
      default: [],
   })
   availability: {
      start: Date;
      end: Date;
   }[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
