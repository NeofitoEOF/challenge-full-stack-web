import { PrismaClient } from "@prisma/client";
import { ILoginDTO } from "../useCases/Login/interface/ILoginDTO";
const prisma = new PrismaClient();

export class email {
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
}
