import { User } from "@prisma/client";
import { IEditRegisterDTO } from "./IEditRegisterDTO";

export interface IEditRegister {
  execute(data: IEditRegisterDTO): Promise<User>;
}
