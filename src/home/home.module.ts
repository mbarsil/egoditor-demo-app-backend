import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from '../auth/jwt.strategy';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [HomeController],
  providers: [
    HomeService,
    JwtStrategy
  ]
})
export class HomeModule {}
