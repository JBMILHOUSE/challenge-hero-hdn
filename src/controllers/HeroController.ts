import { Request, Response } from "express";
import { UpdateHeroService } from "../services/UpdateHeroService";
import { DeleteHeroService } from "../services/DeleteHeroService";

class HeroController {
  async update(request: Request, response: Response){
    const { id } = request.params;
    const { description } = request.body;

    const updateHeroService = new UpdateHeroService();

    const updateHero = await updateHeroService.execute(id, description);

     return response.json(updateHero);
  }

  async delete(request: Request, response: Response){
    const { id } = request.params;

    const deleteHeroService = new DeleteHeroService();

    const hero = await deleteHeroService.execute(id);

    return response.json(hero);
  }
}

export { HeroController };