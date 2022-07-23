import { PrismaClient } from "@prisma/client";
import { ILoginDTO } from "../useCases/Login/interface/ILoginDTO";
const prisma = new PrismaClient();

export class findById {
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
}
