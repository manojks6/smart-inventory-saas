import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entities/inventory.entity';
import { Warehouse } from './entities/warehouse.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}

  // Warehouse Management
  async createWarehouse(name: string, location: string, tenantId: string): Promise<Warehouse> {
    const warehouse = this.warehouseRepository.create({ name, location, tenantId });
    return this.warehouseRepository.save(warehouse);
  }

  async getWarehouses(tenantId: string): Promise<Warehouse[]> {
    return this.warehouseRepository.find({ where: { tenantId } });
  }

  // Stock Management
  async updateStock(productId: string, warehouseId: string, quantity: number, tenantId: string): Promise<Inventory> {
    let inventory = await this.inventoryRepository.findOne({
      where: { productId, warehouseId, tenantId },
    });

    if (inventory) {
      inventory.quantity += quantity;
    } else {
      inventory = this.inventoryRepository.create({
        productId,
        warehouseId,
        quantity,
        tenantId,
      });
    }

    return this.inventoryRepository.save(inventory);
  }

  async getInventoryByProduct(productId: string, tenantId: string): Promise<Inventory[]> {
    return this.inventoryRepository.find({
      where: { productId, tenantId },
      relations: ['warehouse'],
    });
  }
}
