import { Router } from "express";
import { CreateHeroController } from "./controllers/CreateHeroController";
import { CreateHeroPowerController } from "./controllers/CreateHeroPowerController";
import { CreatePowerController } from "./controllers/CreatePowerController";
import { ListHeroesController } from "./controllers/ListHeroesController";

const router = Router();

const createPowerController = new CreatePowerController();
const createHeroController = new CreateHeroController();
const createHeroPowerController = new CreateHeroPowerController();
const listHeroesController = new ListHeroesController();

router.post("/powers", createPowerController.handle);
router.post("/heroes", createHeroController.handle);
router.post("/addPower", createHeroPowerController.handle);

router.get("/heroes", listHeroesController.handle);

export { router };