import { Controller, Get } from '@nestjs/common';
import { BillingServiceClass } from './billing.service';

@Controller()
export class BillingControllerClass {
  constructor(private readonly billingService: BillingServiceClass) {}

  @Get()
  publicGetHello(): string {
    return this.billingService.publicGetHello();
  }
}
