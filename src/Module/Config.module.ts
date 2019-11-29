import { Module } from '@nestjs/common';
import { ConfigService } from 'src/Provider/config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}