import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

class ListHeroesService {
  async execute(){
    const heroesRepositories = getCustomRepository(HeroesRepositories);

    const hero = await heroesRepositories.find();

    return hero;
  }
}

export { ListHeroesService };