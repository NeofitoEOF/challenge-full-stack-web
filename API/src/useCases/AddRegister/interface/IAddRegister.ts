import { User } from "@prisma/client";
import { IAddRegisterDTO } from "./IAddRegisterDTO";

export interface IAddRegister {
  execute(data: IAddRegisterDTO): Promise<User>;
}
