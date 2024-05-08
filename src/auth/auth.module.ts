import { Module } from '@nestjs/common';
import { AuthControllerClass } from './auth.controller';
import { AuthServiceClass } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthControllerClass],
  providers: [AuthServiceClass],
})
export class AuthModule {}
