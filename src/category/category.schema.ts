import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category extends Document {
  @Prop()
  name: string;

  @Prop()
  icon: string;

  @Prop()
  description: string;

  @Prop()
  status: string; // PUBLISHED, ARCHIVED, DELETED, DRAFT, PENDING

  @Prop({ required: false, default: null })
  updatedAt: Date;

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
