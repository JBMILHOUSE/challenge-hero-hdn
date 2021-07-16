import { getCustomRepository } from "typeorm";
import { HeroPowerRepositories } from "../repositories/HeroPowerRepositories";

class ListFilterPowerService {
  async execute(id: string){
    const heroPowerRepositories = getCustomRepository(HeroPowerRepositories);

    const filterPower = await heroPowerRepositories.find({
      where: { power_id: id },
      relations: ["power", "hero"]
    });

    return filterPower;
  }
}

export { ListFilterPowerService };
