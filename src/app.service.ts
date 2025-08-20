import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   getHello(): string {
      return "Hi there! I'm Nguyen Van Phong. Wellcome to my NestJS application!";
   }
}
