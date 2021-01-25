import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthCredentials } from './auth.interface';

const jwtServiceStub = {
  sign: () => 'token'
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: jwtServiceStub }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signIn', () => {
    it('should return sign and return the access token', async () => {
      const credentials: AuthCredentials = { username: 'mario', password: 'mario' };

      expect((await service.signIn(credentials)).toString()).toBe({ accessToken: 'token' }.toString());
    });
  });
});
