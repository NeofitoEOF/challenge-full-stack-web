import { IListUserDTO } from "./IListUserDTO";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListUseUserCase {
  constructor() {}

  async execute(data: IListUserDTO) {
    try {
      const listUser = await prisma.user.findUnique({
        where: {
          cpf: data.Cpf,
        },
        select: {
          name: true,
          email: true,
          RA: true,
          cpf: true,
        },
      });
      return listUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
