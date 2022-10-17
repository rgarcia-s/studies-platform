import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
  ) {}

  create(createSubjectInput: CreateSubjectInput) {
    return 'This action adds a new subject';
  }

  findAll() {
    return `This action returns all subjects`;
  }

  findOne(id: string) {
    return `This action returns a #${id} subject`;
  }

  update(id: string, updateSubjectInput: UpdateSubjectInput) {
    return `This action updates a #${id} subject`;
  }

  remove(id: string) {
    return `This action removes a #${id} subject`;
  }
}
