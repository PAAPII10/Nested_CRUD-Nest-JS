import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Author } from './author.schema';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('lastupdates')
@Schema({ _id: false })
export class LastUpdated {
  @Prop({ type: Author })
  @Field(() => Author)
  author: Author;

  @Prop({ default: null, required: false })
  @Field()
  updatedAt: Date;
}
