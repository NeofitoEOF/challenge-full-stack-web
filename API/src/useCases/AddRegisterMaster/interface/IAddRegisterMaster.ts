import { Master, User } from "@prisma/client";
import { IAddRegisterMasterDTO } from "./IAddRegisterMasterDTO";

export interface IAddRegisterMaster {
  execute(data: IAddRegisterMasterDTO): Promise<Master>;
}
