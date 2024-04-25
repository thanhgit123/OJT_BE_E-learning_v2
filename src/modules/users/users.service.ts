import { BadRequestException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/register.dto';
import *as bcrypt from "bcrypt";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/login.dto';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findUserByPhone(phone: string) {
    return await this.userRepository.findOne({ where: { phone: phone} })
  }

  async createNewUser(body:RegisterDto) {
      const checkPhone = await this.findUserByPhone(body.phone);
      if(checkPhone){
        throw new BadRequestException('Phone already exists');
      } 
      try {
        body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync());
        body.create_date = new Date(Date.now());
        body.modify_date = new Date(Date.now());
        return await this.userRepository.save(body);
      } catch (error) {
        console.log(error)
      }
}

  async login(body: LoginDto) {
    const result = await this.userRepository.findOne({ where: { phone: body.phone } });
    return result
  }
}
