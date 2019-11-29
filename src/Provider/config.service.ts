import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    
  static get(key: string) {
    const envConfig: Record<string, string> = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV || ''}.env`));
    return envConfig[key];
  }
}