import { IListUserDTO } from "./IListUserDTO";
import { PrismaClient } from "@prisma/client";
import { register } from "../../repository/register";

const prisma = new PrismaClient();

export class ListUseUserCase {
  constructor() {}

  async execute(data: IListUserDTO) {
    try {
      const listUser = register.findByUnique(data);
      return listUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
