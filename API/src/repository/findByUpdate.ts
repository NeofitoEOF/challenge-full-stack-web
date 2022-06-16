import { PrismaClient } from "@prisma/client";
import { IEditRegisterDTO } from "../useCases/EditRegister/interface/IEditRegisterDTO";
const prisma = new PrismaClient();

export class update {
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
