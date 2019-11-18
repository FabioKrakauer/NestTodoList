import { Module } from '@nestjs/common';
import { ItemService } from '../Provider/item.service';
import { ItemController } from '../Controller/item.controller';

@Module({
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
