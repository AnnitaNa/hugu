import {Router} from "express";
import { UserController } from "../controllers/user.controller";

export const userRoute = Router();

const userController = new UserController();

userRoute.get("/", userController.getAll);
userRoute.get("/:id", userController.getById);
userRoute.post("/", userController.register);
userRoute.put("/:id", userController.update);
userRoute.delete("/:id", userController.delete);



