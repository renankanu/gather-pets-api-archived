import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { UserResponse } from 'src/api-doc/user.response';
import { User } from '../../dist/models/user.models';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const user = this.userService.findAll();
    return user;
  }

  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post()
  async store(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: 422,
      }),
    )
    body: UserDto,
  ): Promise<User> {
    return this.userService.create(body);
  }
}
