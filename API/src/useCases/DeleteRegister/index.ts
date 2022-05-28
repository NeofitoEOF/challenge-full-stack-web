import { DeleteRegisterController } from "./DeleteRegisterController";
import { DeleteUseUseCase } from "./DeleteUseUseCase";

const deleteUseUseCase = new DeleteUseUseCase();
const deleteRegisterController = new DeleteRegisterController(deleteUseUseCase);

export { deleteRegisterController };
