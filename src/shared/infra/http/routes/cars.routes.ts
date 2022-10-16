import { Router } from "express";

import { ListCarsController } from "../../../../modules/cars/useCases/listCars/ListCarsController";
import { SyncPullCarsController } from "../../../../modules/cars/useCases/sync/SyncPullCarsController";
import { ListCarByIdController } from "../../../../modules/cars/useCases/listCars/ListCarByIdController";

const carsRoutes = Router();

const listCarsController = new ListCarsController();
const listCarByIdController = new ListCarByIdController();
const syncPullCarsController = new SyncPullCarsController();

carsRoutes.get("/", listCarsController.handle);
carsRoutes.get("/:id", listCarByIdController.handle);
carsRoutes.get("/sync/pull", syncPullCarsController.handle);

export { carsRoutes };
