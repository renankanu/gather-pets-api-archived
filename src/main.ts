import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Gather Pets API')
    .setDescription('Gather Pets API')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('API', app, document);

  await app.listen(3000);
}
bootstrap();
