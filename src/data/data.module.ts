import { Module } from '@nestjs/common';
import { DataResolver } from './data.resolver';
import { Data, DataSchema } from './data.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DataService } from './data.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
  providers: [DataResolver, DataService],
})
export class DataModule {}
