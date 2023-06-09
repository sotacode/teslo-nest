import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ProductsService } from 'src/products/products.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async executeSeed() {
    return this.seedService.runSeed();
  }

  



}
