import { PrismaClient } from "@prisma/client";
import { IAddRegisterDTO } from "../useCases/AddRegister/interface/IAddRegisterDTO";

const prisma = new PrismaClient();

export class create {
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
}
