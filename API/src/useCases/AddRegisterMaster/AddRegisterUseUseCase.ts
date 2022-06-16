import { IAddRegisterMasterDTO } from "./interface/IAddRegisterMasterDTO";
import { registerMaster } from "../../repository/findByCreaterMaster";
export class AddRegisterUseUseCase {
  async execute(data: IAddRegisterMasterDTO) {
    if (!data.Email) throw new Error("Unable to create a blank email");
    if (!data.Password) throw new Error("Unable to create a blank user");
    try {
      const createNewUser = await registerMaster.createMaster(data);
      return createNewUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
