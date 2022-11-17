import { Prop, Schema } from '@nestjs/mongoose';
import { OwnerShip } from './ownership.schema';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('authors')
@Schema({ _id: false })
export class Author {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: OwnerShip })
  @Field(() => OwnerShip)
  organization: OwnerShip;
}
