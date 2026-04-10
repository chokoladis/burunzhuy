import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Idea } from "./entities/idea.entity";
import { Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Status } from "../enums/status.enum";

@Injectable()
export class IdeasService {
  constructor(
      @InjectRepository(Idea)
      private readonly ideasRepository: Repository<Idea>,
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
  ) {
  }

  async create(createIdeaDto: CreateIdeaDto): Promise<Idea> {
    const user = await this.userRepository.findOneById(5); // заглушка до авторизации
    if (!user)
      throw new NotFoundException(`User not found`);

    createIdeaDto.preview = JSON.stringify({ test: "data" }); // temp solution

    const newIdea = this.ideasRepository.create({
      ...createIdeaDto,
      status: Status.Active,
      seller: user
    });

    return await this.ideasRepository.save(newIdea);
  }

  async findAll() : Promise<Idea[]> {
    return await this.ideasRepository.find({ relations: ['seller'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} idea`;
  }

  update(id: number, updateIdeaDto: UpdateIdeaDto) {
    return `This action updates a #${id} idea`;
  }

  remove(id: number) {
    return `This action removes a #${id} idea`;
  }
}
