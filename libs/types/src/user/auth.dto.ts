import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
   @IsNotEmpty()
   @IsString()
   username: string;

   @IsNotEmpty()
   @MinLength(6)
   password: string;

   @IsEmail()
   email: string;

   phone?: string;
   displayName?: string;
   avatar?: string;
   cover?: string;
   role?: string;
}

export class LoginDTO {
   @IsNotEmpty()
   @IsString()
   username: string;

   @IsNotEmpty()
   @MinLength(6)
   password: string;
}

export interface LoginResponse {
   access_token: string;
   refresh_token: string;
}

export interface TokenResponse {
   access_token: string;
}
