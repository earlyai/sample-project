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
