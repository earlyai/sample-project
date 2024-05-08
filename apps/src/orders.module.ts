import { Module } from '@nestjs/common';
import { OrdersControllerClass } from './orders';
import { OrdersServiceClass } from './orders';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import {
  OrderClass,
  OrderSchema,
  OrdersRepositoryClass,
} from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: './apps/orders/.env',
    }),
    MongooseModule.forFeature([{ name: OrderClass.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersControllerClass],
  providers: [OrdersServiceClass, OrdersRepositoryClass],
})
export class OrdersModule {}
