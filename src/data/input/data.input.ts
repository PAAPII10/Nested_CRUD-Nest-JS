import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { __Type } from 'graphql/type';
import { Author } from '../schema/author.schema';
import { Item } from '../schema/item.schema';
import { LastUpdated } from '../schema/lastUpdated.schema';
import { OwnerShip } from '../schema/ownership.schema';

@InputType()
export class DataInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  templateId: string;

  @Field()
  categoryId: string;

  @Field()
  type: string;

  @Field(() => [Item], { nullable: true })
  items: Item[];

  @Field()
  itemState: string;

  @Field()
  isTraceable: string;

  @Field()
  allocatedTime: string;

  @Field()
  institutionAllocatedTime: string;

  @Field()
  viewed: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  ownership: OwnerShip;

  @Field()
  author: Author;
}

// @InputType()
// export class UpdateDataInput {
//   @Field()
//   _id: string;

//   @Field()
//   title: string;

//   @Field()
//   description: string;

//   @Field()
//   templateId: string;

//   @Field()
//   categoryId: string;

//   @Field()
//   type: string;

//   @Field((__Type) => [Item])
//   items: Item[];

//   @Field()
//   itemState: string;

//   @Field()
//   isTraceable: string;

//   @Field()
//   allocatedTime: string;

//   @Field()
//   institutionAllocatedTime: string;

//   @Field()
//   viewed: string;

//   @Field(() => [String])
//   tags: string[];

//   @Field(() => OwnerShip)
//   ownership: OwnerShip;

//   @Field(() => Author)
//   author: Author;

//   @Field(() => LastUpdated)
//   lastUpdatedInfo: LastUpdated;
// }

// @InputType()
// export class FindDataInput {
//   @Field()
//   _id: string;
// }
