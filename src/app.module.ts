import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: ['.env.development', '.env'],
         isGlobal: true,
      }),
      MongooseModule.forRoot(
         process.env.DATABASE || 'mongodb://localhost:27017/e-learning',
      ),
      UserModule,
      TeacherModule,
      StudentModule,
      CourseModule,
      FeedbackModule,
      TransactionModule,
      AuthModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
