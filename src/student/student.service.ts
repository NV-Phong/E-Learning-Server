import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
   constructor(
      @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
   ) {}

   async create(data: Partial<Student>): Promise<Student> {
      return new this.studentModel(data).save();
   }

   async findAll(): Promise<Student[]> {
      return this.studentModel.find({ isDeleted: false }).exec();
   }

   async findOne(id: string): Promise<Student> {
      const student = await this.studentModel.findById(id).exec();
      if (!student || student.isDeleted) throw new NotFoundException();
      return student;
   }

   async update(id: string, data: Partial<Student>): Promise<Student> {
      const updated = await this.studentModel.findByIdAndUpdate(id, data, {
         new: true,
      });
      if (!updated) throw new NotFoundException();
      return updated;
   }

   async remove(id: string): Promise<void> {
      const res = await this.studentModel.findByIdAndUpdate(id, {
         isDeleted: true,
      });
      if (!res) throw new NotFoundException();
   }
}
