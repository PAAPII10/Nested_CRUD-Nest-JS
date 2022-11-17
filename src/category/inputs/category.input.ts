import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CategoryInput {
  @Field()
  name: string;

  @Field()
  icon: string;

  @Field()
  description: string;

  @Field()
  status: string;
}

@InputType()
export class UpdateCategoryInput {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  icon: string;

  @Field()
  description: string;

  @Field()
  status: string;
}

@InputType()
export class FindCategoryInput {
  @Field()
  _id: string;
}
