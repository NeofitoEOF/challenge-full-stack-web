import { PrismaClient } from "@prisma/client";
import { IAddRegisterDTO } from "../useCases/AddRegister/IAddRegisterDTO";
import { IEditRegisterDTO } from "../useCases/EditRegister/IEditRegisterDTO";
import { IListUserDTO } from "../useCases/ListRegister/IListUserDTO";

const prisma = new PrismaClient();

export class register {
  static async findCreater(data: IAddRegisterDTO) {
    return await prisma.user.create({
      data: {
        name: data.Name,
        email: data.Email,
        cpf: data.Cpf,
        RA: data.RA,
      },
    });
  }
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
  static async findByUpdate(data: IEditRegisterDTO) {
    return await prisma.user.update({
      where: {
        RA: String(data.RA),
      },
      data: {
        name: data.Name,
        email: data.Email,
      },
    });
  }
}
