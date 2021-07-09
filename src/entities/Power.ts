import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("powers")
class Power {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Power };