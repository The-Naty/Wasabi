import { User } from "@prisma/client";
import { prisma } from "../database";

export interface IUserService {
  getAllUsers(): Promise<Partial<User>[]>;
  getUserById(userId: string): Promise<User | null>;
}

export class UserService implements IUserService {
  public async getAllUsers(): Promise<Partial<User>[]> {
    return await prisma.user.findMany();
  }

  public async getUserById(userId: string): Promise<User | null> {
    const _id = parseInt(userId);
    return prisma.user.findUnique({ where: { id: _id } });
  }
}
