import { User, UserRole } from '@app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
   async getUsers(): Promise<User> {
      return {
         _id: '64f1a8b2e0a5b3a12c9f4d88',
         username: 'phongnguyen',
         password: 'hashed_password_123',
         email: 'phong@example.com',
         phone: 84901234567,
         displayName: 'Nguyễn Văn Phong',
         avatar: 'https://example.com/avatar.png',
         cover: 'https://example.com/cover.png',
         role: UserRole.ADMIN,
         createdAt: new Date('2025-08-23T10:00:00Z'),
         isDeleted: false,
      };
   }
}
