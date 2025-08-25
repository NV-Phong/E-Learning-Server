export enum TransactionStatus {
   PENDING = 'pending',
   PAID = 'paid',
   FAILED = 'failed',
   REFUNDED = 'refunded',
}

export interface Transaction {
   _id: string;
   courseID: string;
   studentID: string;
   status: TransactionStatus;
   amount: number;
   paymentMethod: string;
   createdAt: Date;
   isDeleted: boolean;
}
