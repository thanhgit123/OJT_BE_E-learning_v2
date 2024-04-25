import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  
  @Get('getUserByPhone')
  async findUser(@Body() body: any) {
    const {phone} = body
    return await this.usersService.findUserByPhone(phone);
  }
 
}
