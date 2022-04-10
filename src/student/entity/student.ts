import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  std_id: number;
  @Column({ nullable: false })
  std_name: string;
  @Column({ name: 'province', nullable: false })
  province: string;
}
