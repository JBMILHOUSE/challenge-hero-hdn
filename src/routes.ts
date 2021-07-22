import { Router } from "express";

import { CreateHeroController } from "./controllers/CreateHeroController";
import { CreateHeroPowerController } from "./controllers/CreateHeroPowerController";
import { CreatePowerController } from "./controllers/CreatePowerController";
import { HeroController } from "./controllers/HeroController";
import { ListFilterPowerController } from "./controllers/ListFilterPowerController";
import { ListHeroesController } from "./controllers/ListHeroesController";

const router = Router();

const createPowerController = new CreatePowerController();
const createHeroController = new CreateHeroController();
const createHeroPowerController = new CreateHeroPowerController();
const listHeroesController = new ListHeroesController();
const listPowerController = new ListFilterPowerController();
const heroController = new HeroController();

router.post("/powers", createPowerController.create);
router.post("/heroes", createHeroController.create);
router.post("/add/Power", createHeroPowerController.create);

router.get("/heroes", listHeroesController.listTodo);
router.get("/powers/:id", listPowerController.listFilter);

router.put("/heroes/:id", heroController.update);
router.delete("/heroes/:id", heroController.delete);

export { router };