import { Router } from "express";
import { Route } from "../../common/interfaces/routes.interface";
import {
  AuthController,
  IAuthController,
} from "../../controllers/auth.controller";
import { auth } from "../../middlewares/authentication.middleware";
// import { validate } from "../../middleware/request-validator.middleware";
// import {
//   loginUserReqSchema,
//   registerUserReqSchema,
// } from "../../validations/user.validation.schema";

class AuthRoute implements Route {
  public path = "/auth";
  public router = Router();

  constructor(private authController: IAuthController = new AuthController()) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.authController.register);
    this.router.post(`${this.path}/login`, this.authController.login);
    this.router.post(`${this.path}/logout`, auth, this.authController.logout);
  }
}

export { AuthRoute };
