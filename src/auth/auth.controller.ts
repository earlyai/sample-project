import { Controller, Get } from '@nestjs/common';
import { AuthServiceClass } from './auth.service';

@Controller()
export class AuthControllerClass {
  constructor(private readonly authService: AuthServiceClass) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
