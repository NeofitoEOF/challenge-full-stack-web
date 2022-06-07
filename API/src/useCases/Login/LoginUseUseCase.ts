import { ILoginDTO, ILoginResposta } from "./interface/ILoginDTO";
import { register } from "../../repository/ormUtilizado";
export class LoginUseUseCase {
  async execute({ Email, Password }: ILoginDTO): Promise<ILoginResposta> {
    if (Email === null || Email === "")
      throw new Error("Unable to verify a blank email");
    if (Password === null || Password === "")
      throw new Error("Unable to verify a blank user");
    try {
      const verifyEmail = await register.findByEmail(Email as unknown as ILoginDTO);
      return verifyEmail;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
