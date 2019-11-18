import { Module } from '@nestjs/common';
import { ListService } from '../Provider/list.service';
import { ListController } from 'src/Controller/list.controller';

@Module({
  providers: [ListService],
  controllers: [ListController]
})
export class ListModule {}
