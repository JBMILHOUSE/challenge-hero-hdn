import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

class UpdateHeroService {
  async execute(id: string, description: string){
    const heroesRepositories = getCustomRepository(HeroesRepositories);

    const heroExists = await heroesRepositories.findOne(id);

    if(!heroExists){
      throw new Error("Hero does not exists!");
    }

    const hero = await heroesRepositories.update(id, { description });
    
    return hero;
  }
}

export { UpdateHeroService };