import { PrismaClient } from "@prisma/client";
import { IDeleteRegisterDTO } from "../useCases/DeleteRegister/interface/IDeleteRegisterDTO";
const prisma = new PrismaClient();

export class Delete {
  static async findByDelete(data: IDeleteRegisterDTO) {
    return await prisma.user.delete({
      where: {
        cpf: data.Cpf,
      },
    });
  }
}
