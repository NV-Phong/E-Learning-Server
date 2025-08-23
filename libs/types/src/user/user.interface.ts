export interface User {
   _id: string;
   username: string;
   password: string;
   email: string;
   phone: number;
   displayName: string;
   avatar: string;
   cover: string;
   role: string;
   createdAt: Date;
   isDeleted: boolean;
}
