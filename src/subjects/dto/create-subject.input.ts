import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubjectInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  classes?: string[];
}
