import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurazione CORS
  app.enableCors({
    origin: 'http://localhost:8080', // Indirizzo del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Metodi HTTP permessi
    allowedHeaders: ['Content-Type', 'Authorization'], // Intestazioni permessi
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
