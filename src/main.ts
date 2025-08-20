import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   const allowedOrigins = (process.env.CLIENT_CORS || '')
      .split('|')
      .map((o) => o.trim());
   app.enableCors({
      origin: (origin, callback) => {
         if (!origin) return callback(null, true);
         const isAllowed = allowedOrigins.some((o) => origin.startsWith(o));
         if (isAllowed) {
            callback(null, true);
         } else {
            callback(new Error('Not allowed by CORS'));
         }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
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
