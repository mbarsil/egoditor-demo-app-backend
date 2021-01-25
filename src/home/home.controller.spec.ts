import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { JwtStrategy } from '../auth/jwt.strategy';

describe('HomeController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [JwtStrategy]
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHomeMessage', () => {
    it('should return a greeting message', async () => {
      expect(await controller.getHomeMessage()).toBe('You are in the home page');
    });
  });
});
