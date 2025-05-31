import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger-spec.yml', dump(documentFactory(), {}));
  SwaggerModule.setup('api/docs', app, documentFactory);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
