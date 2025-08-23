import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
   constructor() {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: process.env.ACCESS_TOKEN_SECRET || 'Ng7633nxVa2nPh9ng',
      });
   }

   async validate(payload: any) {
      console.log('Refresh payload:', payload);
      return { IDUser: payload.sub, username: payload.username };
   }
}

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
   Strategy,
   'jwt-refresh',
) {
   constructor() {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: process.env.REFRESH_TOKEN_SECRET || 'gn9hPn2aVxn3367gN',
      });
   }

   async validate(payload: any) {
      return { IDUser: payload.sub, username: payload.username };
   }
}
