/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Category } from './category.schema';
import {
  CategoryInput,
  FindCategoryInput,
  UpdateCategoryInput,
} from './inputs/category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(Cat: FindCategoryInput): Promise<Category> {
    return this.categoryModel.findById(Cat._id);
  }

  async create(createCategory: CategoryInput): Promise<Category> {
    const cat = new this.categoryModel(createCategory);
    return cat.save();
  }

  async update(updateCategory: UpdateCategoryInput): Promise<Category> {
    const cat = await this.categoryModel.findOne(
      new Types.ObjectId(updateCategory._id),
    );
    cat.name = updateCategory.name;
    cat.icon = updateCategory.icon;
    cat.status = updateCategory.status;
    cat.description = updateCategory.description;
    cat.updatedAt = new Date();
    return cat.save();
  }

  async deleteCategory(_id: string): Promise<any> {
    return await this.categoryModel.deleteOne({ _id: new Types.ObjectId(_id) });
  }
}
