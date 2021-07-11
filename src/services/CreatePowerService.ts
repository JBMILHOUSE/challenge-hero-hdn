import { getCustomRepository } from "typeorm";
import { PowersRepositories } from "../repositories/PowersRepositories";

class CreatePowerService {
  async execute(name: string){
    const powersRepositories = getCustomRepository(PowersRepositories); 

    const powerAlreadyExists = await powersRepositories.findOne({ name });

    if(powerAlreadyExists){
      throw new Error("Power already exists");
    }

    const power = powersRepositories.create({ name });

    await powersRepositories.save(power);

    return power;
  }
}

export { CreatePowerService };