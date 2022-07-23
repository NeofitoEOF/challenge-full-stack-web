import { ILoginDTO } from "./interface/ILoginDTO";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Auth } from "../../config/Auth/Index";
import { email } from "../../repository/FindByEmail";
import { ILogin } from "./interface/ILogin";
export class LoginUseUseCase implements ILogin {
  async execute(data: ILoginDTO): Promise<string> {
    if (!data.Email) throw new Error("Unable to verify a blank email");
    if (!data.Password) throw new Error("Unable to verify a blank user");
    try {
      const verifyData = await email.findByEmail(data);
      if (!verifyData) throw new Error("Email alread not exists");

      if (!(await bcrypt.compare(String(data.Password), verifyData.password)))
        throw new Error("Password is incorrect");

      const token = jwt.sign({ id: verifyData.id }, Auth.secret, {
        expiresIn: Auth.expires,
      });
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
