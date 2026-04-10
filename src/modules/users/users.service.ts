import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {Group} from "../groups/entities/group.entity";

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,

      @InjectRepository(Group)
      private readonly groupRepository: Repository<Group>,
  ) {
  }

  // temp for testing
  async create(createUserDto: CreateUserDto)
  {
    const user = await this.userRepository.create(createUserDto);
    const groupUsers = await this.groupRepository.findOne({ where: {code: 'users'} })
    if (groupUsers)
      user.group_id = groupUsers.id;

    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
