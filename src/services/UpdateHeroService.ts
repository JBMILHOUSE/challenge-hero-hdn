import { getCustomRepository } from "typeorm";
import { Hero } from "../entities/Hero";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

class UpdateHeroService {
  async execute(id: string, description: string){
    const heroesRepositories = getCustomRepository(HeroesRepositories);

    const heroExists = await heroesRepositories.findOne(id);

    if(!heroExists){
      throw new Error("Hero does not exists!");
    }

    return await heroesRepositories
            .createQueryBuilder()
            .update(Hero)
            .set({ description })
            .where("id = :id", { id, }).execute();
    
    
  }
}

export { UpdateHeroService };