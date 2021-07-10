import { PrimaryColumn ,Column, CreateDateColumn, Entity, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Power } from "./Power";

@Entity("heroes")
class Hero {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  powers_id: string;

  @JoinColumn({ name: "powers_id" })
  @ManyToOne(() => Power)
  powersId: Power;

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