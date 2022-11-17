import { Document } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('Ownerships')
@Schema({ _id: false })
export class OwnerShip {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  organization: string;
}
