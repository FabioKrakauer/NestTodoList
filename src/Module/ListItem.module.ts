import { Module } from '@nestjs/common';
import { ItemService } from '../Provider/item.service';
import { ItemController } from '../Controller/item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/Entity/item.entity';
import { List } from 'src/Entity/list.entity';
import { ListService } from 'src/Provider/list.service';
import { ListController } from 'src/Controller/list.controller';
import * as path from 'path';
import { ConfigService } from 'src/Provider/config.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, List])],
  providers: [ConfigService, ItemService, ListService],
  controllers: [ItemController, ListController]
})
export class ListItemModule {}