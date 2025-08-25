import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './teacher.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {
   constructor(
      @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
   ) {}

   async create(data: Partial<Teacher>): Promise<Teacher> {
      return new this.teacherModel(data).save();
   }

   async findAll(): Promise<Teacher[]> {
      return this.teacherModel.find({ isDeleted: false }).exec();
   }

   async findOne(id: string): Promise<Teacher> {
      const teacher = await this.teacherModel.findById(id).exec();
      if (!teacher || teacher.isDeleted) throw new NotFoundException();
      return teacher;
   }

   async update(id: string, data: Partial<Teacher>): Promise<Teacher> {
      const updated = await this.teacherModel.findByIdAndUpdate(id, data, {
         new: true,
      });
      if (!updated) throw new NotFoundException();
      return updated;
   }

   async remove(id: string): Promise<void> {
      const res = await this.teacherModel.findByIdAndUpdate(id, {
         isDeleted: true,
      });
      if (!res) throw new NotFoundException();
   }
}
