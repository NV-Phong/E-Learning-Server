import e from 'express';

export * from './types.module';
export * from './types.service';

//--------------------------------------------------INTERFACES--------------------------------------------------//
export * from './user/me.interface';
export * from './user/user.interface';
export * from './teacher/teacher.interface';
export * from './student/student.interface';
export * from './course/course.interface';
export * from './feedback/feedback.interface';
export * from './transaction/transaction.interface';

//--------------------------------------------------DTOs--------------------------------------------------//
export * from './user/auth.dto';
