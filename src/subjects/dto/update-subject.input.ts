import { CreateSubjectInput } from './create-subject.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubjectInput extends PartialType(CreateSubjectInput) {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  desciption: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  classes: string[];
}
