import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   const allowedOrigins = process.env.CLIENT_CORS?.split('|') || [];
   app.enableCors({
      origin: (origin, callback) => {
         if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
         } else {
            callback(new Error('Not allowed by CORS'));
         }
      },
      credentials: true,
   });

   await app.listen(process.env.PORT || 3000);
   Logger.log(
      `🚀 API-Gateway is running on port http://localhost:${process.env.PORT} 🚀`,
   );

   if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
   }
}
bootstrap();
