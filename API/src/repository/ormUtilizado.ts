import { PrismaClient } from "@prisma/client";
import { IAddRegisterDTO } from "../useCases/AddRegister/interface/IAddRegisterDTO";
import { IAddRegisterMasterDTO } from "../useCases/AddRegisterMaster/interface/IAddRegisterMasterDTO";
import { IDeleteRegisterDTO } from "../useCases/DeleteRegister/interface/IDeleteRegisterDTO";
import { IEditRegisterDTO } from "../useCases/EditRegister/interface/IEditRegisterDTO";
import { IListUserDTO } from "../useCases/ListRegister/interface/IListUserDTO";
import bcrypt from "bcryptjs";
import { ILoginDTO } from "../useCases/Login/interface/ILoginDTO";

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
  static async findByEmail(data: ILoginDTO) {
    return prisma.master.findUnique({
      where: {
        email: data.Email,
      },
      select: {
        email: true,
        password: true,
        id: true,
      },
    });
  }

  static async findById(data: ILoginDTO) {
    return prisma.master.findUnique({
      where: {
        id: data.id,
      },
      select: {
        id: true,
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
