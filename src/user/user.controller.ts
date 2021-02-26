import { Controller, Get } from '@nestjs/common';
import { User } from '../models/user.models';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const user = this.userService.findAll();
    return user;
  }
}
