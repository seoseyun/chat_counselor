import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  createUser(): Promise<User[]> {
    return this.userService.findAll();
  }
}
