import { Module } from '@nestjs/common';
import { BillingControllerClass, BillingServiceClass } from './billing';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
  ],
  controllers: [BillingControllerClass],
  providers: [BillingServiceClass],
})
export class BillingModuleClass {}
