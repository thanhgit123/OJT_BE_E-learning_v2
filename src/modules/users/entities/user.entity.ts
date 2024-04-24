import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255,default: 'admin' })
    create_by: string;
  
    @Column({ type: 'date' })
    create_date: Date;
  
    @Column({ type: 'varchar', length: 255 ,default: 'admin' })
    modify_by: string;
  
    @Column({ type: 'date' })
    modify_date: Date;
  
    @Column({type:'varchar', length: 50})
    full_name: string;
  
    @Column({ type:'boolean', default: true })
    is_active: boolean;
  
    @Column({type:'varchar', length: 50})
    password: string;
  
    @Column({type:'varchar', length: 15}) 
    phone: string;
  
    @Column({type:'varchar', length: 50}) 
    username:string;
  
    @Column({type:'boolean', default: false}) 
    voided: boolean;
  
}
