import {
   Controller,
   Get,
   Post,
   Put,
   Delete,
   Param,
   Body,
   UseGuards,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('feedbacks')
@UseGuards(AuthGuard('jwt'))
export class FeedbackController {
   constructor(private readonly feedbackService: FeedbackService) {}

   @Post()
   create(@Body() data: Partial<Feedback>) {
      return this.feedbackService.create(data);
   }

   @Get()
   findAll() {
      return this.feedbackService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.feedbackService.findOne(id);
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() data: Partial<Feedback>) {
      return this.feedbackService.update(id, data);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.feedbackService.remove(id);
   }
}
