import { IEditRegisterDTO } from "./IEditRegisterDTO";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EditUseUseCase {
  async execute(data: IEditRegisterDTO) {
    try {
      const EditUpate = await prisma.user.update({
        where: {
          RA: String(data.RA),
        },
        data: {
          name: data.Name,
          email: data.Email,
        },
      });
      return EditUpate;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
