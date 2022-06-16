import { IDeleteRegisterDTO } from "./interface/IDeleteRegisterDTO";
import { Delete } from "../../repository/findByDelete";
export class DeleteUseUseCase {
  async execute(data: IDeleteRegisterDTO) {
    try {
      const deleteRegister = Delete.findByDelete(data);
      return deleteRegister;
    } catch (error) {
      throw new Error(error);
    }
  }
}
