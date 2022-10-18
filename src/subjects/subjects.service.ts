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

  async create(createSubjectInput: CreateSubjectInput) {
    const subject = this.subjectsRepository.create({
      name: createSubjectInput.name,
      description: createSubjectInput.description,
      classes: createSubjectInput.classes,
    });

    await this.subjectsRepository.insert(subject);

    return subject;
  }

  async findAll() {
    return this.subjectsRepository.find();
  }

  findOne(id: string) {
    return this.subjectsRepository.findOneBy({ id: id });
  }

  async update(id: string, updateSubjectInput: UpdateSubjectInput) {
    await this.subjectsRepository.save(updateSubjectInput);

    return this.subjectsRepository.findOneBy({ id: id });
  }

  async remove(id: string) {
    const subject = await this.subjectsRepository.findOneBy({ id: id });

    await this.subjectsRepository.remove(subject);

    subject.id = id;

    return subject;
  }
}
