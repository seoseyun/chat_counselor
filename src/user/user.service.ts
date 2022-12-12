import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getUser(userName: string): Promise<any> {
      try {
        const result = await this.userModel.find({ userName }).lean();
        return result;
      } catch (err) {
        console.log('error...');
      }
    }

    async setUser(){
      try {
        const test = {userName:"test",password:"test",price:0};
        const result = await this.userModel.create(test);
      } catch (error) {

      }
    }
}
