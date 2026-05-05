import { Entity, Column, OneToMany } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { User } from '../users/user.entity';

@Entity('tenants')
export class Tenant extends CoreEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  domain: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => User, (user) => user.tenant)
  users: User[];
}
