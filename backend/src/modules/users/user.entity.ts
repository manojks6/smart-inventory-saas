import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { CoreEntity } from '../../common/entities/core.entity';
import { Tenant } from '../tenants/tenant.entity';

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  STAFF = 'STAFF',
}

@Entity('users')
export class User extends CoreEntity {
  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'varchar' })
  passwordHash: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STAFF })
  role: UserRole;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'uuid' })
  tenantId: string;

  @ManyToOne(() => Tenant, (tenant) => tenant.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tenantId' })
  tenant: Tenant;
}
