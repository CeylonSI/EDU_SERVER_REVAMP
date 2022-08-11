import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// sequelize import
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

// This should be a real class/interface representing a user entity
export type UserSample = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  // async create(createUserDto: CreateUserDto) : Promise<User> {
  //     const user = await this.userModel.create(createUserDto);
  //     return user;
  //   }
  async create(userData: any): Promise<User> {
    const user = await this.userRepository.create(userData);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  // async findOne(id: number): Promise<User> {
  //   return this.userModel.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async findOne(username: string): Promise<UserSample | undefined> {
    return this.users.find((u) => u.username === username);
  }

  async update(id: number, userData: any): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    return await user.update(userData);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.destroy({ where: { id } });
  }
}
