import { NextFunction, Request, Response } from "express";
import { UserService, IUserService } from "../services/user.service";

export interface IUserController {
  fetchAllUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
  fetchUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export class UserController implements IUserController {
  constructor(private userService: IUserService = new UserService()) {}

  public fetchAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const users = await this.userService.getAllUsers();
    res.status(200).json(users);
  };

  public fetchUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const userId = req.params.userId;
    const user = await this.userService.getUserById(userId);
    res.status(200).json(user);
  };
}
