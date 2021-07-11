import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

interface IHeroRequest {
  name: string;
  description: string;
}

class CreateHeroService {
  async execute({ name, description }: IHeroRequest){
    const heroesRepositories = getCustomRepository(HeroesRepositories);

    const heroAlreadyExists = await heroesRepositories.findOne({ name });

    if(heroAlreadyExists){
      throw new Error("Hero already exists");
    }

    const hero = heroesRepositories.create({ name, description });

    await heroesRepositories.save(hero);

    return hero;
  }
}

export { CreateHeroService };