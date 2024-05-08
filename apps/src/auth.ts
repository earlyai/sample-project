import { Controller, Get } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceClass {
  publicGetHello(): string {
    return 'Hello World!';
  }

  private privateGetHello(): string {
    return this.privateGetHello();
  }
}

@Controller()
export class AuthControllerClass {
  constructor(private readonly authService: AuthServiceClass) {}

  @Get()
  publicGetHello(): string {
    return this.authService.publicGetHello();
  }
}
