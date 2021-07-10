import { Request, response, Response } from "express";
import { CreateHeroService } from "../service/CreateHeroService";

class CreateHeroController {
  async handle(request: Request, Response: Response){

    const { name, description } = request.body;
    const { power_id } = request;

    const createHeroService = new CreateHeroService();

    const hero = await createHeroService.execute({ name, description, powers_id: power_id });

    return response.json(hero);
  }
}

export { CreateHeroController };