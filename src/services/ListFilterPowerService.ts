import { getCustomRepository } from "typeorm";
import { HeroPowerRepositories } from "../repositories/HeroPowerRepositories";
import { PowersRepositories } from "../repositories/PowersRepositories";

class ListFilterPowerService {
  async execute(id: string){
    const heroPowerRepositories = getCustomRepository(HeroPowerRepositories);

    const filterPower = await heroPowerRepositories.find({
      where: { power_id: id },
    });

    return filterPower;
  }
}

export { ListFilterPowerService };
