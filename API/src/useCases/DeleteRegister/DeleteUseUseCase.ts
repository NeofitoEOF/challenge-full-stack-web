import { IDeleteRegisterDTO } from "./interface/IDeleteRegisterDTO";
import { PrismaClient } from "@prisma/client";
import { register } from "../../repository/ormUtilizado";

const prisma = new PrismaClient();

export class DeleteUseUseCase {
  async execute(data: IDeleteRegisterDTO) {
    try {
      const deleteRegister = register.findByDelete(data);
      return deleteRegister;
    } catch (error) {
      throw new Error(error);
    }
  }
}
