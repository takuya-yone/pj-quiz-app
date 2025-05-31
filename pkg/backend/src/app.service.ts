import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class AppServiceType {
  @ApiProperty()
  message: string;
}

@Injectable()
export class AppService {
  getHello(): AppServiceType {
    return { message: 'Hello World!' };
  }
}
