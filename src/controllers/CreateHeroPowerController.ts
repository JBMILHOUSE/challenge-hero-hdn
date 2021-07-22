import { Request, Response} from "express";
import { CreateHeroPower } from "../services/CreateHeroPower";

class CreateHeroPowerController {
  async create(request: Request, response: Response){
    const { hero_id, power_id } = request.body;

    const createHeroPowerService = new CreateHeroPower();

    const status = await createHeroPowerService.execute({
      hero_id,
      power_id,
    });

    return response.json(status);
  }
}

export { CreateHeroPowerController };