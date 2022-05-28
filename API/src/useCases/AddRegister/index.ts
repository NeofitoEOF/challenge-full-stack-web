import { AddRegisterUsers } from "./AddControllerRegister";
import { AddRegisterUseUseCase } from "./AddRegisterUseUseCase";

const addRegisterUseUseCase = new AddRegisterUseUseCase()
const addControllerRegister = new AddRegisterUsers(addRegisterUseUseCase);

export { addControllerRegister }