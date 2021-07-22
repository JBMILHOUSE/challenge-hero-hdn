import { getCustomRepository } from "typeorm";
import { HeroesRepositories } from "../repositories/HeroesRepositories";

class DeleteHeroService {
 async execute(id: string){
   const heroRepositories = getCustomRepository(HeroesRepositories);
  
   const deleteHero = await heroRepositories.findOne(id);

   if(deleteHero){
     throw new Error("Hero don't existing");
   }
   
   return await heroRepositories.delete(id);
 }
}

export { DeleteHeroService };