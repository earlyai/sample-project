import { NestFactory } from '@nestjs/core';
import { BillingModuleClass } from '../../src/billing';
import { RmqServiceClass } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(BillingModuleClass);
  const rmqService = app.get<RmqServiceClass>(RmqServiceClass);
  app.connectMicroservice(rmqService.getOptions('billing'));
  await app.startAllMicroservices();
}
bootstrap();
