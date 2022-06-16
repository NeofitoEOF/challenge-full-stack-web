import { PrismaClient } from "@prisma/client";
import { IAddRegisterDTO } from "../useCases/AddRegister/interface/IAddRegisterDTO";
import { IAddRegisterMasterDTO } from "../useCases/AddRegisterMaster/interface/IAddRegisterMasterDTO";
import { IDeleteRegisterDTO } from "../useCases/DeleteRegister/interface/IDeleteRegisterDTO";
import { IEditRegisterDTO } from "../useCases/EditRegister/interface/IEditRegisterDTO";
import { IListUserDTO } from "../useCases/ListRegister/interface/IListUserDTO";
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
