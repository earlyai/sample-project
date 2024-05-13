import { Controller, Get } from '@nestjs/common';
import { AuthServiceClass } from './auth.service';

@Controller()
export class AuthControllerClass {
  constructor(private readonly authService: AuthServiceClass) {}

  @Get()
  publicGetHello(): string {
    return this.authService.publicGetHello();
  }
}
