import { Body, Controller, Post, Get } from '@nestjs/common';
import { OrdersServiceClass } from './orders.service';
import { CreateOrderRequest } from './dto/create-order-request';

@Controller('orders')
export class OrdersControllerClass {
  constructor(private readonly ordersService: OrdersServiceClass) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
