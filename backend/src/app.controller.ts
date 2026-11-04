import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('transactions')
  getTransactions() {
    return this.appService.getTransactions();
  }

  @Post('transactions')
  createTransactions(@Body() data: unknown) {
    return this.appService.createTransaction(data);
  }
}
