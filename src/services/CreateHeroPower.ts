import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";
import { HeroPowerRepositories } from "../repositories/HeroPowerRepositories";
import { PowersRepositories } from "../repositories/PowersRepositories";

interface IHeroPower {
  hero_id: string;
  power_id: string; 
}

class CreateHeroPower {
  async execute({hero_id, power_id}: IHeroPower) {
    const heroPowerRepositories = getCustomRepository(HeroPowerRepositories);
    const heroesRepositories = getCustomRepository(HeroesRepositories);
    const powersRepositories = getCustomRepository(PowersRepositories);

    const heroExists = await heroesRepositories.findOne(hero_id);

    if(!heroExists){
      throw new Error("Hero does not exists!");
    }

    const powerExists = await powersRepositories.findOne(power_id);

    if(!powerExists){
      throw new Error("Power does not exists!");
    }

    const statusPowerOfHero = heroPowerRepositories.create({ hero_id, power_id });

    await heroPowerRepositories.save(statusPowerOfHero);

    return  statusPowerOfHero;
  }
}

export { CreateHeroPower };