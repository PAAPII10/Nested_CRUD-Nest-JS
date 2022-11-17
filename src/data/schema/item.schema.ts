import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
@ObjectType()
@InputType('Items')
export class Item {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field(() => GraphQLJSON)
  attributes: JSON;

  @Field(() => GraphQLJSON)
  css: JSON; // PUBLISHED, ARCHIVED, DELETED, DRAFT, PENDING
}
