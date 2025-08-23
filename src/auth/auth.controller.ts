import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from '@app/types';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('register')
   async Register(@Body() registerDTO: RegisterDTO) {
      return this.authService.Register(registerDTO);
   }

   @Post('login')
   async Login(@Body() loginDTO: LoginDTO) {
      return this.authService.Login(loginDTO);
   }

   @Post('refresh-token')
   @UseGuards(AuthGuard('jwt-refresh'))
   RefreshToken(@Req() req) {
      return this.authService.RefreshAccessToken(req.user);
   }
}
