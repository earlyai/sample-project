import { NestFactory } from '@nestjs/core';
import { AuthModuleClass } from '../../src/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModuleClass);
  await app.listen(3000);
}
bootstrap();
