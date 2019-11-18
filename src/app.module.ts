import { Module } from '@nestjs/common';
import { ListModule } from './Module/list.module';
import { ItemModule } from './Module/item.module';

@Module({
  imports: [ListModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
