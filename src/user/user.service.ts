import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../dist/models/user.models';
import { UserI } from '../models/user/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async add(user: UserI): Promise<UserI> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserI[]> {
    return this.userRepository.find();
  }
}
