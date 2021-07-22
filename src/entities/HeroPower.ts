import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Hero } from "./Hero";
import { Power } from "./Power";

@Entity("heroes_powers")
class HeroPower {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  hero_id: string;

  @JoinColumn({name: "hero_id"})
  @ManyToOne(() => Hero, { cascade: true, onDelete: "CASCADE"})
  hero: Hero; 

  @Column()
  power_id: string;

  @JoinColumn({name: "power_id"})
  @ManyToOne(() => Power)
  power: Power;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { HeroPower };