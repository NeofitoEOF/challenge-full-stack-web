import { PrismaClient } from "@prisma/client";
import { IAddRegisterMasterDTO } from "../useCases/AddRegisterMaster/interface/IAddRegisterMasterDTO";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export class registerMaster {
  static async createMaster(data: IAddRegisterMasterDTO) {
    const createSenhaHash = await bcrypt.hash(data.Password, 10);
    return await prisma.master.create({
      data: {
        email: data.Email,
        password: createSenhaHash,
      },
    });
  }
}
