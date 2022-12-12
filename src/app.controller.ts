import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly userService: UserService) {}

  @Get()
  get(): string {
    return this.appService.getHello();
  }

  @Get('test123')
  setUser(): any {
    return this.userService.setUser();
  }

  @Get('getget')
  getUser(): any {
    return this.userService.getUser("test");
  }

}
