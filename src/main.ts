import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) {
        return callback(null, true);
      }

      const configuredOrigins = process.env.CLIENT_URL
        ? process.env.CLIENT_URL.split(',').map((url) => url.trim().replace(/\/$/, ''))
        : ['http://localhost:3000', 'http://localhost:3001'];

      // Always allow localhost on any port and 127.0.0.1
      const isLocalhost =
        /^http:\/\/localhost(:\d+)?$/.test(origin) ||
        /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin);

      const isConfigured = configuredOrigins.some(
        (allowed) => origin === allowed || origin.includes(allowed) || allowed.includes(origin),
      );

      const isVercel = origin.endsWith('.vercel.app');

      if (isLocalhost || isConfigured || isVercel) {
        return callback(null, true);
      }

      // Default fallback: allow in dev, callback with true
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });

  app.setGlobalPrefix('api/v1', {
    exclude: ['/', 'health'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 4000;

  await app.listen(port, '0.0.0.0');

  console.log(`API running on port ${port} (prefix: /api/v1)`);
}

bootstrap();