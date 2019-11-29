import { Module } from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import { List } from './Entity/list.entity';
import { Item } from './Entity/item.entity';
import { ListItemModule } from './Module/ListItem.module';
import { ConfigService } from './Provider/config.service';


@Module({
  imports:  [TypeOrmModule.forRoot({
    type: 'mysql',
    host: ConfigService.get('DATABASE_IP'),
    port: 3306,
    username: ConfigService.get('DATABASE_USERNAME'),
    password: ConfigService.get('DATABASE_PASSWORD'),
    database: ConfigService.get('DATABASE_NAME'),
    entities: [List, Item],
    synchronize: true,
    logging: (ConfigService.get('DATABASE_SHOW_LOG') == "true")
  }), ListItemModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
