import { IDeleteRegisterDTO } from "./interface/IDeleteRegisterDTO";
import { Delete } from "../../repository/FindByDelete";
import { IDeleteRegister } from "./interface/IDeleteRegister";
export class DeleteUseUseCase implements IDeleteRegister {
  async execute(data: IDeleteRegisterDTO) {
    try {
      const deleteRegister = Delete.findByDelete(data);
      return deleteRegister;
    } catch (error) {
      throw new Error(error);
    }
  }
}
