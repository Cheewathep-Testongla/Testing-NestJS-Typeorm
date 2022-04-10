import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { Student } from 'src/student/entity/student';

@Injectable()
export class StudentService {
  public students: StudentDto[] = [];

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  createS(auser: StudentDto): Promise<StudentDto> {
    return this.studentRepository.save(auser);
  }
  loadAllS(): Promise<StudentDto[]> {
    return this.studentRepository.find();
  }
  loadSpecific(id: number): Promise<StudentDto[]> {
    return this.studentRepository.find({ std_id: id });
  }
  Q1(): Promise<StudentDto[]> {
    return this.studentRepository.query(
      'select * from student order by std_name asc;',
    );
  }
  Q2(): Promise<StudentDto[]> {
    return this.studentRepository.query(
      'SELECT std_id, std_name FROM student;',
    );
  }
  Q3(): Promise<StudentDto[]> {
    return this.studentRepository.query(
      'SELECT * FROM student WHERE province = "ขอนแก่น";',
    );
  }
  Q4(): Promise<StudentDto[]> {
    return this.studentRepository.query(
      'SELECT course.course_id, course.title, course.credit FROM student JOIN course WHERE std_id = "5001100348";',
    );
  }
  Q5(): Promise<StudentDto[]> {
    return this.studentRepository.query(
      'SELECT register.std_id, SUM(credit) from register JOIN course WHERE course.course_id = register.course_id GROUP BY register.std_id;',
    );
  }
  async removeS(uid: number): Promise<void> {
    await this.studentRepository.delete(uid);
  }
  async loadOne(id: number): Promise<StudentDto> {
    return await this.studentRepository.findOne({ std_id: id });
  }
  async search(id: number): Promise<StudentDto> {
    return await this.studentRepository.findOne({ std_id: id });
  }
}
