import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqServiceClass {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Generates RabbitMQ transport options for a specific queue.
   * Uses the RabbitMQ URI and queue names configured via environment variables.
   *
   * @param queue - The name of the RabbitMQ queue.
   * @param noAck - Optional flag to disable message acknowledgment (defaults to `false`).
   * @returns An object containing the RabbitMQ transport options.
   *
   * ### Transport Enum
   * - `Transport.RMQ` (5): Identifies the RabbitMQ transport option.
   */
  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI')],
        queue: this.configService.get<string>(
          `RABBIT_MQ_${queue.toUpperCase()}_QUEUE`,
        ),
        queueOptions: {
          durable: false,
        },
        noAck,
        persistent: true,
      },
    };
  }
}
