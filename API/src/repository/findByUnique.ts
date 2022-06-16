import { PrismaClient } from "@prisma/client";
import { IListUserDTO } from "../useCases/ListRegister/interface/IListUserDTO";
const prisma = new PrismaClient();

export class unique {
  static async findByUnique(data: IListUserDTO) {
    return await prisma.user.findUnique({
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
  }
}
