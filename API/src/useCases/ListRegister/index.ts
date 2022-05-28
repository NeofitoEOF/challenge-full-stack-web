import { ListUseUserCase } from "./ListUseUseCase";
import { ListUserController } from './ListControllerRegister';

const listRegisterUseUseCase = new ListUseUserCase();
const listControllerUsers = new ListUserController(listRegisterUseUseCase);

export {listControllerUsers}