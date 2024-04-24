import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255,default: 'admin' })
  create_by: string;

  @Column({ type: 'date' })
  create_date: Date;

  @Column({ type: 'varchar', length: 255 ,default: 'admin' })
  modify_by: string;

  @Column({ type: 'date' })
  modify_date: Date;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'boolean', default: false })
  voided: boolean;

  @Column({ type: 'varchar', length: 255 })
  sub_description: string;

  @Column({ type: 'longtext' })
  description: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.course)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @OneToMany(() => Chapter, (chapter) => chapter.course)
  chapters: Chapter[];

 
}
