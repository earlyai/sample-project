import { Module } from '@nestjs/common';
import { AuthControllerClass } from './auth';
import { AuthServiceClass } from './auth';

@Module({
  imports: [],
  controllers: [AuthControllerClass],
  providers: [AuthServiceClass],
})
export class AuthModuleClass {}
