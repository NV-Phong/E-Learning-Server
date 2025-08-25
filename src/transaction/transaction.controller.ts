import {
   Controller,
   Get,
   Post,
   Put,
   Delete,
   Param,
   Body,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.schema';

@Controller('transactions')
export class TransactionController {
   constructor(private readonly transactionService: TransactionService) {}

   @Post()
   create(@Body() data: Partial<Transaction>) {
      return this.transactionService.create(data);
   }

   @Get()
   findAll() {
      return this.transactionService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.transactionService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<Transaction>) {
      return this.transactionService.update(id, data);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.transactionService.remove(id);
   }
}
