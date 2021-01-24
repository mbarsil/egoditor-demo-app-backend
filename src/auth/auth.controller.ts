import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentials, JwtPayload } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @Post('signin')
  async signIn(@Body() authCredentials: AuthCredentials): Promise<JwtPayload> {
    return this.authService.signIn(authCredentials);
  }
}
