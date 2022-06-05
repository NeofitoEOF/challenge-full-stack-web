import { PrismaClient } from "@prisma/client";
import { IAddRegisterDTO } from "../useCases/AddRegister/IAddRegisterDTO";
import { IAddRegisterMasterDTO } from "../useCases/AddRegisterMaster/interface/IAddRegisterMasterDTO";
import { IDeleteRegisterDTO } from "../useCases/DeleteRegister/IDeleteRegisterDTO";
import { IEditRegisterDTO } from "../useCases/EditRegister/IEditRegisterDTO";
import { IListUserDTO } from "../useCases/ListRegister/IListUserDTO";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export class register {
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
  static async findByUnique(data: IListUserDTO) {
    return await prisma.user.findUnique({
      where: {
        cpf: data.Cpf,
      },
      select: {
        name: true,
        email: true,
        RA: true,
        cpf: true,
      },
    });
  }
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
  static async findByDelete(data: IDeleteRegisterDTO) {
    return await prisma.user.delete({
      where: {
        cpf: data.Cpf,
      },
    });
  }
}
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
