import { IAddRegisterDTO } from "./interface/IAddRegisterDTO";
import { register } from "../../repository/ormUtilizado";
export class AddRegisterUseUseCase {
  async execute(data: IAddRegisterDTO) {
    if (!data.Name) throw new Error("Unable to create a blank user");
    if (!data.Email) throw new Error("Unable to create a blank email");
    if (!data.Cpf) throw new Error("Unable to create a blank cpf");
    if (!data.RA) throw new Error("Unable to create a blank RA");

    try {
      let createNewUser = register.findCreater(data);
      return createNewUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
