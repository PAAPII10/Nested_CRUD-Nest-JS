import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';
import { OwnerShip } from './schema/ownership.schema';
import { Author } from './schema/author.schema';
import { LastUpdated } from './schema/lastUpdated.schema';
import { ObjectType, Field } from '@nestjs/graphql';
import { Item } from './schema/item.schema';

@ObjectType()
@Schema()
export class Data {
  @Prop()
  @Field({ nullable: true })
  title: string;

  @Prop()
  @Field()
  description: string;

  @Prop()
  @Field()
  templateId: string;

  @Prop()
  @Field()
  categoryId: string;

  @Prop()
  @Field()
  type: string;

  @Prop({ type: Item })
  @Field(() => [Item])
  items: Item[];

  @Prop()
  @Field()
  itemState: string;

  @Prop()
  @Field()
  isTraceable: string;

  @Prop()
  @Field()
  allocatedTime: string;

  @Prop()
  @Field()
  institutionAllocatedTime: string;

  @Prop()
  @Field()
  viewed: number;

  @Prop()
  @Field(() => [String])
  tags: string[];

  @Prop({ type: OwnerShip })
  @Field(() => OwnerShip)
  ownership: OwnerShip;

  @Prop({ type: Author })
  @Field(() => Author)
  author: Author;

  @Prop({ required: false, default: null, type: LastUpdated })
  @Field(() => LastUpdated)
  lastUpdatedInfo: LastUpdated;

  @Prop({ required: true, default: () => new Date() })
  @Field()
  createdAt: Date;

  @Prop({ required: true, default: () => new Date() })
  @Field()
  publishedAt: Date;
}

export type DataDocument = Data & Document;
export const DataSchema = SchemaFactory.createForClass(Data);
