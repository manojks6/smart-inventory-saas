import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CoreEntity } from '../../../common/entities/core.entity';
import { Tenant } from '../../tenants/tenant.entity';
import { Product } from '../../products/product.entity';
import { Warehouse } from './warehouse.entity';

@Entity('inventory')
export class Inventory extends CoreEntity {
  @Column({ type: 'uuid' })
  productId: string;

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'uuid' })
  warehouseId: string;

  @ManyToOne(() => Warehouse, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Warehouse;

  @Column({ default: 0 })
  quantity: number;

  @Column({ type: 'uuid' })
  tenantId: string;

  @ManyToOne(() => Tenant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tenantId' })
  tenant: Tenant;
}
