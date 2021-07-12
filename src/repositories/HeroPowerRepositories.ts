import { EntityRepository, Repository } from "typeorm";
import { HeroPower } from "../entities/HeroPower";

@EntityRepository(HeroPower)
class HeroPowerRepositories extends Repository<HeroPower>{}

export { HeroPowerRepositories };