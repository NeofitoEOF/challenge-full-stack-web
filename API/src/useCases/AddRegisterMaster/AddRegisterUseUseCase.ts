import { IAddRegisterMasterDTO } from "./interface/IAddRegisterMasterDTO";
import { registerMaster } from "../../repository/ormUtilizado";
export class AddRegisterUseUseCase {
  async execute(data: IAddRegisterMasterDTO) {
    if (data.Email === null || data.Email === "")
      throw new Error("Unable to create a blank email");
    if (data.Password === null || data.Password === "")
      throw new Error("Unable to create a blank user");
    try {
      let createNewUser = registerMaster.createMaster(data);
      return createNewUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
