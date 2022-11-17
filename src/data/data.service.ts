/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Data, DataDocument } from './data.schema';
import { DataInput } from './input/data.input';

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) {}

  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }

  //   async findOne(Cat: FindDataInput): Promise<Data> {
  //     return this.dataModel.findById(Cat._id);
  //   }

  async create(createData: DataInput): Promise<Data> {
    const dat = new this.dataModel(createData);
    return dat.save();
  }

  //   async update(updateData: UpdateDataInput): Promise<Data> {
  //     const dat = await this.dataModel.findOne(
  //       new Types.ObjectId(updateData._id),
  //     );
  //     dat.title = updateData.title;
  //     dat.templateId = updateData.templateId;
  //     dat.categoryId = updateData.categoryId;
  //     dat.description = updateData.description;
  //     dat.type = updateData.type;
  //     return dat.save();
  //   }

  //   async deleteData(_id: string): Promise<any> {
  //     return await this.dataModel.deleteOne({ _id: new Types.ObjectId(_id) });
  //   }
}
