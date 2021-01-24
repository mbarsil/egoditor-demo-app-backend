import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthCredentials, JwtPayload } from './auth.interface';
import { USER } from './auth.constant';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }

  async signIn(authCredentials: AuthCredentials): Promise<JwtPayload> {
    if (!authCredentials) { return; }

    const { username, password } = authCredentials;

    if (username !== USER.username || password !== USER.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: string = username;
    const accessToken: string = this.jwtService.sign({ payload });

    return { accessToken };
  }
}
