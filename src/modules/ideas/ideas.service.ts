import {Inject, Injectable} from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Idea} from "./entities/idea.entity";
import {Repository} from "typeorm";

@Injectable()
export class IdeasService {
  constructor(
      @InjectRepository(Idea)
      private readonly ideasRepository: Repository<Idea>,
  ) {
  }

  create(createIdeaDto: CreateIdeaDto) {
    return 'This action adds a new idea';
  }

  findAll() {
    return `This action returns all ideas`;
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
