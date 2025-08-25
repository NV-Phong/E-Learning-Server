// user/schemas/user.schema.ts
import { UserRole } from '@app/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
   _id: Types.ObjectId;

   @Prop({ required: true, unique: true })
   username: string;

   @Prop({ required: true })
   password: string;

   @Prop({ required: true, unique: true })
   email: string;

   @Prop()
   phone: string;

   @Prop()
   displayName: string;

   @Prop()
   avatar: string;

   @Prop()
   cover: string;

   @Prop({
      type: String,
      enum: UserRole,
      default: UserRole.STUDENT,
   })
   role: UserRole;

   @Prop({ default: false })
   isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
