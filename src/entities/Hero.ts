import { PrimaryColumn, Column, CreateDateColumn, Entity, UpdateDateColumn, } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("heroes")
class Hero {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Hero };