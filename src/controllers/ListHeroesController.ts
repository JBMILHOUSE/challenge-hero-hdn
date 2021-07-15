import { Request, Response } from "express";
import { ListHeroesService } from "../services/ListHeroesService";
import { DeleteHeroService } from "../services/DeleteHeroService";

class ListHeroesController {
  async handle(request: Request, response: Response){
    const listHeroesService = new ListHeroesService();

    const heroes = await listHeroesService.execute();

    return response.json(heroes);
  }

  async delete(request: Request, response: Response){
    const id = request.params.id;

    const deleteHeroService = new DeleteHeroService();

    const hero = await deleteHeroService.execute(id);

    return response.json(hero);
  }
}

export { ListHeroesController };