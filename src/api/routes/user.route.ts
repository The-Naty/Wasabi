import { Router } from "express";
import { UserController } from "../../controllers/user.controller";
import { IUserController } from "../../controllers/user.controller";
import { Route } from "../../common/interfaces/routes.interface";

export class UserRoute implements Route {
  public path = "/user";
  public router = Router();

  constructor(private userController: IUserController = new UserController()) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.userController.fetchAllUsers);
    this.router.get(`${this.path}/:userId`, this.userController.fetchUserById);
  }
}
