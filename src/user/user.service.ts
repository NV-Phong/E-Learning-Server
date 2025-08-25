import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
   constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>,
   ) {}

   async findAll(): Promise<User[]> {
      return this.userModel.find({ isDeleted: false }).exec();
   }

   async findOne(id: string): Promise<User> {
      const user = await this.userModel.findById(id).exec();
      if (!user || user.isDeleted)
         throw new NotFoundException(`User ${id} not found`);
      return user;
   }

   async update(id: string, data: Partial<User>): Promise<User> {
      const updated = await this.userModel
         .findByIdAndUpdate(id, data, { new: true })
         .exec();
      if (!updated) throw new NotFoundException(`User ${id} not found`);
      return updated;
   }
}
