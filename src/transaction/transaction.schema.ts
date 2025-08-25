import { TransactionStatus } from '@app/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
   _id: Types.ObjectId;

   @Prop({ type: Types.ObjectId, ref: 'Course', required: true })
   courseID: Types.ObjectId;

   @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
   studentID: Types.ObjectId;

   @Prop({
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.PENDING,
   })
   status: TransactionStatus;

   @Prop({ required: true })
   amount: number;

   @Prop()
   paymentMethod: string;

   @Prop({ default: false })
   isDeleted: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
