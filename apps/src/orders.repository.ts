import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection, Model, Schema, Types, FilterQuery } from 'mongoose';
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
import { CreateOrderRequestClass } from './dto/create-order-request';

/**
 * Order Schema
 */
@MongooseSchema()
export class OrderClass {
  @Prop({ type: Schema.Types.ObjectId, default: new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  phoneNumber: string;
}

export const OrderSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
});

/**
 * Orders Repository
 */
@Injectable()
export class OrdersRepositoryClass {
  constructor(
    @InjectModel(OrderClass.name)
    private readonly orderModel: Model<OrderClass>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  /**
   * Saving a created order to the database.
   * @param request - The CreateOrderRequest data to be created.
   * @returns A promise that resolves to the created order.
   */
  async create(request: CreateOrderRequestClass): Promise<OrderClass> {
    const { name, price, phoneNumber } = request;

    // Construct a new order object
    const orderData = {
      name,
      price,
      phoneNumber,
      _id: new Types.ObjectId(),
    };

    // Create the order model instance
    const createdOrder = new this.orderModel(orderData);

    // Save the order to the database
    const savedOrder = await createdOrder.save();

    // Convert the saved order to the Order type
    const order = savedOrder as unknown as OrderClass;

    return order;
  }

  /**
   * Finds multiple orders matching the given filter query.
   * @param filterQuery - The filter query to match against.
   * @returns A promise that resolves to an array of matching orders.
   */
  async find(filterQuery: FilterQuery<OrderClass> = {}): Promise<OrderClass[]> {
    return this.orderModel.find(filterQuery, {}, { lean: true });
  }
}
