import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

interface IHeroRequest {
  name: string;
  description: string;
  powers_id: string;
}

class CreateHeroService {
  async execute({ name, description, powers_id }: IHeroRequest){
    const heroesRepositories = getCustomRepository(HeroesRepositories);

    const nameAlreadyExists = await heroesRepositories.findOne({ name });

    if(nameAlreadyExists){
      throw new Error("Name already exists");
    }

    const hero = heroesRepositories.create({ name, description, powers_id });

    await heroesRepositories.save(hero);

    return hero;
  }
}

export { CreateHeroService };