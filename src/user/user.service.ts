import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { User } from '../../dist/models/user.models';
import { UserI } from '../models/user/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  add(user: UserI): Observable<UserI> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
  }
}
