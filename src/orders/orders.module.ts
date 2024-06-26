import { Module } from '@nestjs/common';
import { OrdersControllerClass } from './orders.controller';
import { OrdersServiceClass } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { Order, OrderSchema, OrdersRepositoryClass } from './orders.repository';
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
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersControllerClass],
  providers: [OrdersServiceClass, OrdersRepositoryClass],
})
export class OrdersModule {}
