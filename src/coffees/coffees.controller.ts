import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { resourceLimits } from 'worker_threads';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}
    
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action resturns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action resturns #${id} coffees`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action removes #${id} coffee`;
  }
}
