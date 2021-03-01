import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserResponse } from 'src/api-doc/user.response';
import { UserI } from '../models/user/user.interface';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Observable<UserI[]> {
    return this.userService.findAll();
  }

  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post()
  add(@Body() user: UserI): Observable<UserI> {
    return this.userService.add(user);
  }
}
