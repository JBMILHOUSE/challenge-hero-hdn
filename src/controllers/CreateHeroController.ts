import { Request, Response } from "express";
import { CreateHeroService } from "../services/CreateHeroService";

class CreateHeroController {
  async create(request: Request, response: Response){
    const { name, description } = request.body;

    const createHeroService = new CreateHeroService();

    const hero = await createHeroService.execute({ name, description });

    return response.json(hero);
  }
}

export { CreateHeroController };