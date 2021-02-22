import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.models';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Post()
  async create(@Body() body: User): Promise<User> {
    const user = this.userRepository.create(body);
    return this.userRepository.save(user);
  }
}
