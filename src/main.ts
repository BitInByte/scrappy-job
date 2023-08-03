import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const prefix = configService.get<string>('GLOBAL_PREFIX') || '';
  const port = configService.get<number>('PORT') || 3000;
  app.setGlobalPrefix(prefix);
  await app.listen(port);

  logger.log(
    `Application listening on port ${port} and global prefix ${prefix}`,
  );
}
bootstrap();
