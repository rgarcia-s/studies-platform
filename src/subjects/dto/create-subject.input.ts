import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubjectInput {
  @Field()
  name: string;

  @Field()
  desciption: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  classes?: string[];
}
