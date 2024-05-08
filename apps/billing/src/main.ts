import { NestFactory } from '@nestjs/core';
import { RmqServiceClass } from '@app/common';
import { BillingModuleClass } from 'apps/src/billing.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingModuleClass);
  const rmqService = app.get<RmqServiceClass>(RmqServiceClass);
  app.connectMicroservice(rmqService.getOptions('billing'));
  await app.startAllMicroservices();
}
bootstrap();
