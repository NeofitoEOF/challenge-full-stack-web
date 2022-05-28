import { IDeleteRegisterDTO } from "./IDeleteRegisterDTO";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteUseUseCase {
  constructor() {}

  async execute(data: IDeleteRegisterDTO) {
    try {
      const deleteRegister = await prisma.user.delete({
        where: {
          cpf: data.Cpf,
        },
      });
     return deleteRegister 
    } catch (error) {
      throw new Error(error);
    }
  }
}
