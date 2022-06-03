import { Request, Response } from "express";
import { AddRegisterUseUseCase } from "./AddRegisterUseUseCase";

export class AddRegisterMaster {
  constructor(private addRegisterUseUseCase: AddRegisterUseUseCase) {}

  async handle(request: Request, response: Response){
    const { email, senha } = request.body;
    try {
      await this.addRegisterUseUseCase.execute({
        Email: email,
        Password: senha,
      });
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
