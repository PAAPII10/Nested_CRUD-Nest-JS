// import { ObjectType, Field } from '@nestjs/graphql';

// @ObjectType()
// export class OwnerShip {
//   @Field()
//   id: string;

//   @Field()
//   organization: string;
// }

// @ObjectType()
// export class Author {
//   @Field()
//   id: string;

//   @Field()
//   name: string;

//   @Field()
//   organization: OwnerShip;
// }

// @ObjectType()
// export class LastUpdated {
//   @Field()
//   author: Author;

//   @Field({ nullable: true })
//   updatedAt: Date;
// }

// @ObjectType()
// export class DataDto {
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

//   @Field()
//   items: any;

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

//   @Field()
//   ownership: OwnerShip;

//   @Field()
//   author: Author;

//   @Field()
//   lastUpdatedInfo: LastUpdated;

//   @Field()
//   createdAt: Date;

//   @Field()
//   publishedAt: Date;
// }
