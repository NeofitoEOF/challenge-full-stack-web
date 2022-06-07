import { Request, Response } from "express";
import { LoginUseUseCase } from "./LoginUseUseCase";

export class LoginControllerUsers {
  constructor(private loginUseUseCase: LoginUseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    try {
      await this.loginUseUseCase.execute({
        Email: email,
        Password: password,
      });
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
