import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';

@Injectable()
export class CourseService {
   constructor(
      @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
   ) {}

   async create(data: Partial<Course>): Promise<Course> {
      const created = new this.courseModel(data);
      return created.save();
   }

   async findAll(): Promise<Course[]> {
      return this.courseModel.find({ isDeleted: false }).exec();
   }

   async findOne(id: string): Promise<Course> {
      const course = await this.courseModel.findById(id).exec();
      if (!course || course.isDeleted) {
         throw new NotFoundException(`Course ${id} not found`);
      }
      return course;
   }

   async update(id: string, data: Partial<Course>): Promise<Course> {
      const updated = await this.courseModel
         .findByIdAndUpdate(id, data, { new: true })
         .exec();
      if (!updated) throw new NotFoundException(`Course ${id} not found`);
      return updated;
   }

   async remove(id: string): Promise<void> {
      const res = await this.courseModel.findByIdAndUpdate(id, {
         isDeleted: true,
      });
      if (!res) throw new NotFoundException(`Course ${id} not found`);
   }
}
