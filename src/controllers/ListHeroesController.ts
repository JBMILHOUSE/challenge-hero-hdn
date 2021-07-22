import { Request, Response } from "express";
import { ListHeroesService } from "../services/ListHeroesService";

class ListHeroesController {
  async listTodo(request: Request, response: Response){
    const listHeroesService = new ListHeroesService();

    const heroes = await listHeroesService.execute();

    return response.json(heroes);
  }

}

export { ListHeroesController };