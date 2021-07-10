import { Router } from "express";
import { CreateHeroController } from "./controllers/CreateHeroController";
import { CreatePowerController } from "./controllers/CreatePowerController";

const router = Router();

const createPowerController = new CreatePowerController();
const createHeroController = new CreateHeroController();

router.post("/powers", createPowerController.handle);
router.post("/hero", createHeroController.handle);

export { router };