import { EntityRepository, Repository } from "typeorm";
import { Power } from "../entities/Power";

@EntityRepository(Power)
class PowersRepositories extends Repository<Power> {}

export { PowersRepositories };