import { Request, Response } from "express";
import { CreatePowerService } from "../services/CreatePowerService";

class CreatePowerController {
  async create(request: Request, response: Response){
    const { name } = request.body;

    const createPowerService = new CreatePowerService();
    
    const power = await createPowerService.execute(name);

    return response.json(power);
    
  }
}

export { CreatePowerController };