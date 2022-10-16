import { Router } from "express";

import { carsRoutes } from "./cars.routes";
import { usersRoutes } from "./users.routes";
import { rentalRoutes } from "./rental.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use(authenticateRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);

export { router };
