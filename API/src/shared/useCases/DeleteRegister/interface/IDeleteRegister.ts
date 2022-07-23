import { User } from "@prisma/client";
import { IDeleteRegisterDTO } from "./IDeleteRegisterDTO";

export interface IDeleteRegister {
  execute(data: IDeleteRegisterDTO): Promise<User>;
}
