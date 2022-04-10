import { UserEntity } from './../../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto/user-dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  public users: UserDto[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  createS(auser: UserDto): Promise<UserDto> {
    return this.userRepository.save(auser);
  }
  loadAllS(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  loadSpecific(id: number): Promise<UserDto[]> {
    return this.userRepository.find({ id });
  }
  async removeS(uid: number): Promise<void> {
    await this.userRepository.delete(uid);
  }
  async loadOne(id: number): Promise<UserDto> {
    return await this.userRepository.findOne({ id: id });
  }
  // async search(id: number): Promise<UserDto> {
  //   return await this.userRepository.findOne({ id: id });
  // }
}
