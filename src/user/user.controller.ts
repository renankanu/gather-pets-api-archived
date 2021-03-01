import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserResponse } from 'src/api-doc/user.response';
import { UserI } from '../models/user/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserI[]> {
    return this.userService.findAll();
  }

  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post()
  async add(@Body() user: UserI): Promise<UserI> {
    return this.userService.add(user);
  }
}
