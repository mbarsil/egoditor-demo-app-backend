import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  @Get()
  getAccountById(): string {
    return 'You are in the home page';
  }
}
