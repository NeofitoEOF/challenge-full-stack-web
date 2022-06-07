import { ILoginDTO } from "./interface/ILoginDTO";
import { register } from "../../repository/ormUtilizado";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { auth } from "../../config/Auth";
export class LoginUseUseCase {
  async execute(data: ILoginDTO): Promise<string> {
    if (!data.Email) throw new Error("Unable to verify a blank email");
    if (!data.Password) throw new Error("Unable to verify a blank user");
    try {
      const verifyData = await register.findByEmail(data);
      if (!verifyData) throw new Error("Email alread not exists");

      if (!(await bcrypt.compare(String(data.Password), verifyData.password)))
        throw new Error("Password is incorrect");

      const token = jwt.sign({ id: verifyData.id }, auth.secret, {
        expiresIn: auth.expires,
      });
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
