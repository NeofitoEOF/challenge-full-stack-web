import { IAddRegisterDTO } from "./interface/IAddRegisterDTO";
import { create } from "../../repository/findCreater";
import { IAddRegister } from "./interface/IAddRegister";

export class AddRegisterUseUseCase implements IAddRegister {
  async execute(data: IAddRegisterDTO) {
    if (!data.Name) throw new Error("Unable to create a blank user");
    if (!data.Email) throw new Error("Unable to create a blank email");
    if (!data.Cpf) throw new Error("Unable to create a blank cpf");
    if (!data.RA) throw new Error("Unable to create a blank RA");

    try {
      let createNewUser = create.findCreater(data);
      return createNewUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
