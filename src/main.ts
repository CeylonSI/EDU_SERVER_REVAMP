import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PORT } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet()); // HTTP headers Vulnerabilities
  app.use(cookieParser());
  // app.use(csurf({ cookie: true })); // Cross-site request forgery (CSRF / XSRF)

  // trigger validations in class-validator
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT;
  console.log('PORT: ', PORT);
  //swagger setup
  const config = new DocumentBuilder()
    .setTitle('Nest Rest API')
    .setDescription(
      'The Nest Rest API. API description the crud operation for user models',
    )
    .setVersion('1.0')
    .build();
    
  app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(PORT);
}
bootstrap();
