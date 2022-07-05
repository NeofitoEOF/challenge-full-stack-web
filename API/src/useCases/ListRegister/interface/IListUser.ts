import { IListUserDTO } from "./IListUserDTO";

export interface IListUser {
  execute(data: IListUserDTO): Promise<{
    name: string;
    email: string;
    RA: string;
    cpf: string;
  }>;
}
