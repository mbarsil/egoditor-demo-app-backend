import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('home')
@UseGuards(AuthGuard())
export class HomeController {
  @Get()
  getHomeMessage(@Req() req): string {
    return 'You are in the home page';
  }
}
