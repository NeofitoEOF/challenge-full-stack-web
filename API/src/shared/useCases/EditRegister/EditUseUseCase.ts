import { IEditRegisterDTO } from "./interface/IEditRegisterDTO";
import { update } from "../../repository/FindByUpdate";
import { IEditRegister } from "./interface/IEditRegister";
export class EditUseUseCase implements IEditRegister {
  async execute(data: IEditRegisterDTO) {
    try {
      const EditUpate = update.findByUpdate(data);
      return EditUpate;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
