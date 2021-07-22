import { Request, Response } from "express";
import { UpdateHeroService } from "../services/UpdateHeroService";
import { DeleteHeroService } from "../services/DeleteHeroService";

class HeroController {
  async update(request: Request, response: Response){
    const { id } = request.params;
    const { description } = request.body;

    const updateHeroService = new UpdateHeroService();

    await updateHeroService.execute(id, description);

    return response.json({message: "change was successful"});
  }
  
  // funcionalidade não funciona
  async delete(request: Request, response: Response){
    const { id } = request.params;

    try {
      const deleteHeroService = new DeleteHeroService();

      await deleteHeroService.execute(id);

      return response.json({ message: "hero successfully deleted" });
    } catch (error) {
      return response.json(error);
    }
    
  }
}

export { HeroController };