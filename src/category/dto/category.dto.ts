import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CategoryDto {
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

  @Field({ nullable: true })
  updatedAt: Date;

  @Field()
  createdAt: string;
}
