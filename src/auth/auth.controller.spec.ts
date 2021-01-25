import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthCredentials } from './auth.interface';
import { AuthService } from './auth.service';

const authServiceStub = {
  signIn: () => 'token'
};

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: authServiceStub }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('signIn', () => {
    it('should return  return the access token', async () => {
      const credentials: AuthCredentials = { username: 'mario', password: 'mario' };

      expect(await controller.signIn(credentials)).toBe('token');
    });
  });
});
