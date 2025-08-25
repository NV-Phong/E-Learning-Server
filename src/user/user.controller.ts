import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.schema';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get()
   findAll() {
      return this.userService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<User>) {
      return this.userService.update(id, data);
   }
}
