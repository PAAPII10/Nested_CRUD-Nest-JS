import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Data } from './data.schema';
import { DataService } from './data.service';
// import { DataDto } from './dto/data.dto';
import { DataInput } from './input/data.input';

@Resolver((of) => Data)
export class DataResolver {
  constructor(private dataService: DataService) {}

  @Query(() => [Data])
  async data() {
    return this.dataService.findAll();
  }

  //   @Query(() => DataDto)
  //   async findData(@Args('input') input: FindDataInput) {
  //     return this.dataService.findOne(input);
  //   }

  @Mutation(() => Data)
  async createData(@Args('input') input: DataInput) {
    return this.dataService.create(input);
  }

  //   @Mutation(() => DataDto)
  //   async updateData(@Args('input') input: UpdateDataInput) {
  //     return this.dataService.update(input);
  //   }

  //   @Mutation(() => String)
  //   async deleteCategory(@Args('input') input: FindDataInput): Promise<any> {
  //     await this.dataService.deleteData(input._id);
  //     return 'Data removed';
  //   }
}
