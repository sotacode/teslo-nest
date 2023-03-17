import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { SeedModule } from 'src/seed/seed.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage]),
  ],
  exports: [
    ProductsService
  ]
})
export class ProductsModule {}
