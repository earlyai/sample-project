import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order-request';
import { OrdersRepositoryClass } from './orders.repository';

@Injectable()
export class OrdersServiceClass {
  constructor(private readonly ordersRepository: OrdersRepositoryClass) {}

  async createOrder(request: CreateOrderRequest) {
    return this.ordersRepository.create(request);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
