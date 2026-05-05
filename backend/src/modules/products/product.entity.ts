import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { Tenant } from '../tenants/tenant.entity';

@Entity('products')
export class Product extends CoreEntity {
  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  sku: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ default: 0 })
  currentStock: number;

  @Column({ type: 'uuid' })
  tenantId: string;

  @ManyToOne(() => Tenant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tenantId' })
  tenant: Tenant;
}
