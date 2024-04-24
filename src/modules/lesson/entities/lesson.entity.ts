import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255 ,default:'admin'})
  create_by: string;

  @Column({ type: 'date' })
  create_date: Date;

  @Column({ type: 'varchar', length: 255,default:'admin'})
  modify_by: string;

  @Column({ type: 'date' })
  modify_date: Date;

  @Column({type:'longtext'})
  description: string;

  @Column({type:'varchar', length: 255, default:'Rekkei'})
  resources:string

  @Column({type:'varchar', length: 255})
  title:string

  @Column({type:'varchar', length: 255})
  video:string

  @Column({ type: 'boolean', default: false })
  voided: boolean;

  @Column({type:'longtext',nullable:true})
  document:string

  @ManyToOne(() => Chapter, (chapter) => chapter.lessons)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter[]; 


}
