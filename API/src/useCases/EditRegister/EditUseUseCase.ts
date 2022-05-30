import { IEditRegisterDTO } from "./IEditRegisterDTO";
import { PrismaClient } from "@prisma/client";
import { register } from "../../repository/register";

const prisma = new PrismaClient();

export class EditUseUseCase {
  async execute(data: IEditRegisterDTO) {
    try {
      const EditUpate = register.findByUpdate(data)
      return EditUpate;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
