import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import {
  CategoryInput,
  FindCategoryInput,
  UpdateCategoryInput,
} from './inputs/category.input';

@Resolver()
export class CategoryResolver {
  constructor(private catService: CategoryService) {}

  @Query(() => [CategoryDto])
  async categories() {
    return this.catService.findAll();
  }

  @Query(() => CategoryDto)
  async findCategory(@Args('input') input: FindCategoryInput) {
    return this.catService.findOne(input);
  }

  @Mutation(() => CategoryDto)
  async createCategory(@Args('input') input: CategoryInput) {
    return this.catService.create(input);
  }

  @Mutation(() => CategoryDto)
  async updateCategory(@Args('input') input: UpdateCategoryInput) {
    return this.catService.update(input);
  }

  @Mutation(() => String)
  async deleteCategory(@Args('input') input: FindCategoryInput): Promise<any> {
    await this.catService.deleteCategory(input._id);
    return 'Category removed';
  }
}
