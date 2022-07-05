import { AddRegisterMaster } from "./AddControllerRegister";
import { AddRegisterUseUseCase } from "./AddRegisterUseUseCase";

const addRegisterUseUseCase = new AddRegisterUseUseCase()
const addControllerMaster = new AddRegisterMaster(addRegisterUseUseCase);

export { addControllerMaster }