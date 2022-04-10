import { UserService } from './../../service/user/user.service';
import { UserDto } from './../../dto/user.dto/user-dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Post()
  // create(@Body() user: UserDto): Promise<UserDto> {
  //   return this.userService.createS(user);
  // }
  @Get()
  loadAll(): Promise<UserDto[]> {
    return this.userService.loadAllS();
  }
  @Get('specific/:id')
  loadSpecific(@Param('id') id: number): Promise<UserDto[]> {
    return this.userService.loadSpecific(id);
  }
  // @Delete(':id')
  // async deleteAuser(@Param('id') id: number): Promise<any> {
  //   await this.userService.removeS(id);
  //   return { sucesss: true };
  // }

  // @Put(':id')
  // async updateAuser(
  //   @Param('id') id: number,
  //   @Body() udto: UserDto,
  // ): Promise<UserDto> {
  //   const aUser = await this.userService.loadOne(id);
  //   aUser.name = udto.name;
  //   aUser.lastName = udto.lastName;
  //   return await this.userService.createS(aUser);
  // }
}
