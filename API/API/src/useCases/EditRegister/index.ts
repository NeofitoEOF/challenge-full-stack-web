import { EditUseUseCase } from "./EditUseUseCase";
import { EditControllerRegister } from "./EditControllerRegister";

const editUseUseCase = new EditUseUseCase();
const editControllerRegister = new EditControllerRegister(editUseUseCase);

export { editControllerRegister };
