import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { RentalByUserController } from "@modules/rentals/useCases/createRental/RentalByUserController";

const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const rentalByUserController = new RentalByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.get("/", ensureAuthenticated, rentalByUserController.handle);

export { rentalRoutes };
