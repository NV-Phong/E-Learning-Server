import { Me } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   getHello(): string {
      return "Hi there! I'm Nguyen Van Phong. Wellcome to my NestJS application!";
   }

   async getMe(): Promise<Me> {
      return {
         name: 'Nguyễn Văn Phong',
         motto:'I build digital experiences that don\'t just work spark something new.',
         age: 25,
         address: 'Quảng Trị, Việt Nam',
         hobbies: ['Coding', 'Reading', 'Designing'],
         skills: ['JavaScript', 'TypeScript', 'NestJS', 'React', 'NextJS'],
         experience: [
            {
               company: 'UI-Engineer',
               position: 'CEO',
               duration: '2 years',
            },
            {
               company: 'Startup',
               position: 'Full Stack Developer',
               duration: '1 year',
            },
         ],
      };
   }
}
