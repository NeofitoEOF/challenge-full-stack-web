import { ILoginDTO } from "./ILoginDTO";

export interface ILogin {
  execute(data: ILoginDTO): Promise<string>;
}
