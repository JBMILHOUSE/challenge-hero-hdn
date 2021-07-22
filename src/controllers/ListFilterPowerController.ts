import { Request, Response } from "express";
import { ListFilterPowerService } from "../services/ListFilterPowerService";

class ListFilterPowerController {
  async listFilter(request: Request, response: Response){
    const id = request.params.id;

    const listFilterPowerService = new ListFilterPowerService();

    const powerFilter = await listFilterPowerService.execute(id);

    return response.json(powerFilter);
  }   
}

export { ListFilterPowerController };