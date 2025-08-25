import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@app/types';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get()
   async getUsers(): Promise<User> {
      return this.userService.getUsers();
   }
}
