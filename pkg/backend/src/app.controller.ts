import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService, AppServiceType } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    type: AppServiceType,
  })
  @Get()
  @ApiOperation({ summary: 'Get sample data' })
  @ApiResponse({ status: 200, description: 'Success' })
  getHello() {
    return this.appService.getHello();
  }
}
