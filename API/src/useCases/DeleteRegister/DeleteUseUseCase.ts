import { IDeleteRegisterDTO } from "./IDeleteRegisterDTO";
import { PrismaClient } from "@prisma/client";
import { register } from "../../repository/register";

const prisma = new PrismaClient();

export class DeleteUseUseCase {
  constructor() {}

  async execute(data: IDeleteRegisterDTO) {
    try {
      const deleteRegister = register.findByDelete(data);
      return deleteRegister;
    } catch (error) {
      throw new Error(error);
    }
  }
}
