export enum BookingStatus {
   PENDING = 'pending',
   CONFIRMED = 'confirmed',
   CANCELLED = 'cancelled',
   COMPLETED = 'completed',
}

export enum BookingType {
   TRIAL = 'trial',
   PAID = 'paid',
}

export interface Student {
   _id: string;
   userID: string;
   level: string;
   goals: string[];
   booking: {
      teacherID: string;
      courseID: string;
      status: BookingStatus;
      type: BookingType;
      start: Date;
      end: Date;
   }[];
}
