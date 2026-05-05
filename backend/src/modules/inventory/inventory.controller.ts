import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';

@Controller('inventory')
@UseGuards(JwtAuthGuard)
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('warehouses')
  createWarehouse(
    @Body() body: { name: string; location: string },
    @GetUser('tenantId') tenantId: string,
  ) {
    return this.inventoryService.createWarehouse(body.name, body.location, tenantId);
  }

  @Get('warehouses')
  getWarehouses(@GetUser('tenantId') tenantId: string) {
    return this.inventoryService.getWarehouses(tenantId);
  }

  @Post('stock-adjust')
  updateStock(
    @Body() body: { productId: string; warehouseId: string; quantity: number },
    @GetUser('tenantId') tenantId: string,
  ) {
    return this.inventoryService.updateStock(body.productId, body.warehouseId, body.quantity, tenantId);
  }

  @Get('product/:productId')
  getInventoryByProduct(
    @Param('productId') productId: string,
    @GetUser('tenantId') tenantId: string,
  ) {
    return this.inventoryService.getInventoryByProduct(productId, tenantId);
  }
}
