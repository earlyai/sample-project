import { Module } from '@nestjs/common/decorators';
import { RmqServiceClass } from './rmq.service';

@Module({
  providers: [RmqServiceClass],
  exports: [RmqServiceClass],
})
export class RmqModule {}
