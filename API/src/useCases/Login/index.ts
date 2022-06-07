import { LoginControllerUsers } from "./LoginController";
import { LoginUseUseCase } from "./LoginUseUseCase";

const loginUseUseCase = new LoginUseUseCase()
const loginControllerUsers = new LoginControllerUsers(loginUseUseCase);

export { loginControllerUsers }