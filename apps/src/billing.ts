import { Controller, Get } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingServiceClass {
  publicGetHello(): string {
    return this.privateGetHello();
  }
  private privateGetHello(): string {
    return 'Hello World!';
  }
}

@Controller()
export class BillingControllerClass {
  constructor(private readonly billingService: BillingServiceClass) {}

  @Get()
  publicGetHello(): string {
    return this.billingService.publicGetHello();
  }
}
