import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { SyncUserController } from "../../../../modules/accounts/useCases/createUser/SyncUserController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/createUser/UpdateUserController";

const usersRoutes = Router();
const syncUserController = new SyncUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/sync", syncUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);

export { usersRoutes };
