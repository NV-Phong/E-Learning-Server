import {
   Body,
   Controller,
   Get,
   Param,
   Put,
   UseGuards,
   Request,
} from '@nestjs/common';
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

   @Get('/profile')
   findOne(@Request() req) {
      return this.userService.findOne(req.user.IDUser);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<User>) {
      return this.userService.update(id, data);
   }
}
