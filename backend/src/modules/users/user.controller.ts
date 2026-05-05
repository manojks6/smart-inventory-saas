import { Controller, Post, Body, Get, UseGuards, ForbiddenException } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';
import { UserRole } from './user.entity';
import * as bcrypt from 'bcrypt';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() body: any,
    @GetUser('role') role: string,
    @GetUser('tenantId') tenantId: string,
  ) {
    // Only ADMINs can create new users in their tenant
    if (role !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can create users');
    }

    const { email, password, firstName, lastName, userRole } = body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    return this.usersService.create({
      firstName,
      lastName,
      email,
      passwordHash,
      tenantId,
      role: userRole || UserRole.STAFF,
    });
  }

  @Get()
  async findAll(@GetUser('tenantId') tenantId: string) {
    // Returns all users belonging to the tenant
    // Note: In a real app, you might want to exclude passwordHash here too
    return (await this.usersService.findAllByTenant(tenantId));
  }
}
