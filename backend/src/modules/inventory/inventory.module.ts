import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Inventory } from './entities/inventory.entity';
import { Warehouse } from './entities/warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, Warehouse])],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class InventoryModule { }
