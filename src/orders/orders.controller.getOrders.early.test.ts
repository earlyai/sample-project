// mock-orders.service.ts
export class MockOrdersServiceClass {
  public getOrders = jest.fn();
}

import { OrdersControllerClass } from './orders.controller';
//import { MockOrdersServiceClass } from './mock-orders.service';

describe('OrdersControllerClass - getOrders', () => {
  let ordersController: OrdersControllerClass;
  let mockOrdersService: MockOrdersServiceClass;

  beforeEach(() => {
    mockOrdersService = new MockOrdersServiceClass();
    ordersController = new OrdersControllerClass(mockOrdersService as any);
  });

  it('should return a list of orders when getOrders is called', async () => {
    // Arrange
    const mockOrders = [{ id: 1, item: 'Item 1' }, { id: 2, item: 'Item 2' }];
    mockOrdersService.getOrders.mockResolvedValue(mockOrders as any as never);

    // Act
    const result = await ordersController.getOrders();

    // Assert
    expect(result).toEqual(mockOrders);
    expect(mockOrdersService.getOrders).toHaveBeenCalledTimes(1);
  });

  it('should handle empty orders list', async () => {
    // Arrange
    const mockOrders: any[] = [];
    mockOrdersService.getOrders.mockResolvedValue(mockOrders as any as never);

    // Act
    const result = await ordersController.getOrders();

    // Assert
    expect(result).toEqual(mockOrders);
    expect(mockOrdersService.getOrders).toHaveBeenCalledTimes(1);
  });

  it('should handle errors thrown by getOrders', async () => {
    // Arrange
    const errorMessage = 'An error occurred';
    mockOrdersService.getOrders.mockRejectedValue(new Error(errorMessage) as never);

    // Act & Assert
    await expect(ordersController.getOrders()).rejects.toThrow(errorMessage);
    expect(mockOrdersService.getOrders).toHaveBeenCalledTimes(1);
  });
});