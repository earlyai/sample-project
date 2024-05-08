import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateOrderRequestClass } from './dto/create-order-request';
import { Injectable } from '@nestjs/common';
import { OrdersRepositoryClass } from './orders.repository';

@Injectable()
export class OrdersServiceClass {
  constructor(private readonly ordersRepository: OrdersRepositoryClass) {}

  async createOrder(request: CreateOrderRequestClass) {
    return this.ordersRepository.create(request);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}

@Controller('orders')
export class OrdersControllerClass {
  constructor(private readonly ordersService: OrdersServiceClass) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequestClass) {
    return this.ordersService.createOrder(request);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
