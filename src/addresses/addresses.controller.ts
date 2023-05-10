import { Controller, Get, Post, Patch, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { AddressesService } from './addresses.service';
import { ParseMongoIdPipe } from './../common/pipes/parse-mongo-id.pipe';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.addressesService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.addressesService.findOne(id);
  }

  @Post(':id/firstTx')
  findFirstTransaction(@Param('id', ParseMongoIdPipe) id: string) {
    return this.addressesService.findFirstTransaction(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string) {
    return this.addressesService.update(id);
  }
}
