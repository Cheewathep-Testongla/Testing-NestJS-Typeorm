import { IsNumber, IsString } from 'class-validator';

export class StudentDto {
  @IsNumber()
  std_id: number;

  @IsString()
  std_name: string;

  @IsString()
  province: string;
}
