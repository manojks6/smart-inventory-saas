import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
  ) {}

  async createTenant(name: string): Promise<Tenant> {
    const tenant = this.tenantRepository.create({ name });
    return this.tenantRepository.save(tenant);
  }

  async findById(id: string): Promise<Tenant | null> {
    return this.tenantRepository.findOne({ where: { id } });
  }
}
