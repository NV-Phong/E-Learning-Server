import {
   BadRequestException,
   ConflictException,
   HttpException,
   HttpStatus,
   Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/user/user.schema';
import {
   LoginDTO,
   LoginResponse,
   RefreshAccessTokenDTO,
   RegisterDTO,
   TokenResponse,
} from '@app/types';

@Injectable()
export class AuthService {
   constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>,
      private readonly jwtservice: JwtService,
      private readonly configService: ConfigService,
   ) {}

   async Register(registerDTO: RegisterDTO): Promise<any> {
      const user = await this.userModel.findOne({
         $or: [
            { username: registerDTO.username },
            { email: registerDTO.email },
         ],
      });

      if (user) {
         const errorMessage =
            user.username === registerDTO.username
               ? 'User with this Username already exists'
               : 'User with this Email already exists';
         throw new ConflictException(errorMessage);
      }

      if (!registerDTO.username || !registerDTO.password) {
         throw new BadRequestException(
            !registerDTO.username
               ? 'Username is required'
               : 'Password is required',
         );
      }

      const HashedPassword = await bcrypt.hash(registerDTO.password, 10);

      await new this.userModel({
         ...registerDTO,
         password: HashedPassword,
      }).save();

      return {
         message: 'User registered successfully',
         data: {
            user: {
               username: registerDTO.username,
               email: registerDTO.email,
            },
         },
      };
   }

   GenerateAccessToken(user: User) {
      const payload = {
         username: user.username,
         sub: user._id,
         email: user.email,
      };
      return this.jwtservice.sign(payload, {
         secret: process.env.ACCESS_TOKEN_SECRET,
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      });
   }

   GenerateRefreshToken(user: User) {
      const payload = {
         username: user.username,
         sub: user._id,
         email: user.email,
      };
      return this.jwtservice.sign(payload, {
         secret: process.env.REFRESH_TOKEN_SECRET,
         expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
      });
   }

   async Login(login: LoginDTO): Promise<LoginResponse> {
      const user = await this.userModel.findOne({ username: login.username });
      if (user && (await bcrypt.compare(login.password, user.password))) {
         const AccessToken = this.GenerateAccessToken(user);
         const RefreshToken = this.GenerateRefreshToken(user);

         return {
            access_token: AccessToken,
            refresh_token: RefreshToken,
         };
      }
      throw new HttpException(
         {
            message: 'Invalid credentials, please try again',
            statusCode: HttpStatus.BAD_REQUEST,
         },
         HttpStatus.BAD_REQUEST,
      );
   }

   async RefreshAccessToken(
      refreshaccesstokenDTO: RefreshAccessTokenDTO,
   ): Promise<TokenResponse> {
      try {
         const user = await this.userModel
            .findById(new Types.ObjectId(refreshaccesstokenDTO.IDUser))
            .exec();

         if (!user) {
            throw new HttpException(
               `User with ID ${refreshaccesstokenDTO.IDUser} not found`,
               HttpStatus.NOT_FOUND,
            );
         }
         return { access_token: this.GenerateAccessToken(user) };
      } catch (error) {
         throw new HttpException(
            {
               message: 'Invalid token',
               statusCode: HttpStatus.BAD_REQUEST,
               error: error.message || error,
            },
            HttpStatus.BAD_REQUEST,
         );
      }
   }
}
