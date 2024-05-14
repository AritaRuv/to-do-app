import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix("api/v1");

  app.enableCors({
    origin: 'http://localhost:4200', // Reemplaza esto con el dominio de tu frontend
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Permite el envío de cookies de forma cruzada
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //trasnfor autom the data every time it can
    })
  );
  await app.listen(3000);
}
bootstrap();
