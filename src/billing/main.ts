import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqServiceClass } from 'src/common';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmqService = app.get<RmqServiceClass>(RmqServiceClass);
  app.connectMicroservice(rmqService.getOptions('billing'));
  await app.startAllMicroservices();
}
bootstrap();
