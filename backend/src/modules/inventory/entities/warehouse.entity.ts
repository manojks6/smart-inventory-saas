import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CoreEntity } from '../../../common/entities/core.entity';
import { Tenant } from '../../tenants/tenant.entity';

@Entity('warehouses')
export class Warehouse extends CoreEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'uuid' })
  tenantId: string;

  @ManyToOne(() => Tenant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tenantId' })
  tenant: Tenant;
}
