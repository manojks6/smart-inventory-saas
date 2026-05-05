import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @GetUser('tenantId') tenantId: string,
  ) {
    return this.productsService.create(createProductDto, tenantId);
  }

  @Get()
  findAll(@GetUser('tenantId') tenantId: string) {
    return this.productsService.findAll(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('tenantId') tenantId: string) {
    return this.productsService.findOne(id, tenantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: Partial<CreateProductDto>,
    @GetUser('tenantId') tenantId: string,
  ) {
    return this.productsService.update(id, updateProductDto, tenantId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('tenantId') tenantId: string) {
    return this.productsService.remove(id, tenantId);
  }
}
