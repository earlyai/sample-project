import { Module } from '@nestjs/common';
import { BillingControllerClass } from './billing.controller';
import { BillingServiceClass } from './billing.service';
import { RmqModule } from 'src/common';
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
export class BillingModule {}
