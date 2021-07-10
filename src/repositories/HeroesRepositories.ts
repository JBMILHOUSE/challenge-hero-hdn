import { EntityRepository, Repository } from "typeorm";
import { Hero } from "../entities/Hero";

@EntityRepository(Hero)
class HeroesRepositories extends Repository<Hero> {}

export { HeroesRepositories };