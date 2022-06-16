import { IEditRegisterDTO } from "./interface/IEditRegisterDTO";
import { update } from "../../repository/findByUpdate";
export class EditUseUseCase {
  async execute(data: IEditRegisterDTO) {
    try {
      const EditUpate = update.findByUpdate(data);
      return EditUpate;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
