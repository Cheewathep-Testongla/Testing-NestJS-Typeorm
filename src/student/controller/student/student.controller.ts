import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { StudentService } from 'src/student/service/student/student.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post()
  create(@Body() std_name: StudentDto): Promise<StudentDto> {
    return this.studentService.createS(std_name);
  }
  @Get()
  loadAll(): Promise<StudentDto[]> {
    return this.studentService.loadAllS();
  }
  @Get('specific/:std_id')
  loadSpecific(@Param('std_id') std_id: number): Promise<StudentDto[]> {
    return this.studentService.loadSpecific(std_id);
  }
  @Delete(':id')
  async deleteAuser(@Param('id') id: number): Promise<any> {
    await this.studentService.removeS(id);
    return { sucesss: true };
  }
  // Assignment_1
  @Get('Quiz1')
  Quiz1(): Promise<StudentDto[]> {
    return this.studentService.Q1();
  }
  // Assignment_2
  @Get('Quiz2')
  Quiz2(): Promise<StudentDto[]> {
    return this.studentService.Q2();
  }
  @Get('Quiz3')
  Quiz3(): Promise<StudentDto[]> {
    return this.studentService.Q3();
  }
  @Get('Quiz4')
  Quiz4(): Promise<StudentDto[]> {
    return this.studentService.Q4();
  }
  @Get('Quiz5')
  Quiz5(): Promise<StudentDto[]> {
    return this.studentService.Q5();
  }
}
