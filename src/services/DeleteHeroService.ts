import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";
import { Hero } from "../entities/Hero";

class DeleteHeroService {
 async execute(id: string){
   const heroRepositories = getCustomRepository(HeroesRepositories);

   const deleteHero = await heroRepositories.findOne(id);

   if(!deleteHero){
     throw new Error("Hero don't existing");
   }

   const hero = await heroRepositories.createQueryBuilder().delete().from(Hero).where("id = :id", { id }).execute();

   return hero;
 }
}

export { DeleteHeroService };