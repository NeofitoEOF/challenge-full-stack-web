import { Request, Response } from "express";
import { AddRegisterUseUseCase } from "./AddRegisterUseUseCase";
import { IAddRegisterMaster } from "./interface/IAddRegisterMaster";

export class AddRegisterMaster {
  constructor(private addRegisterUseUseCase: IAddRegisterMaster) {}

  async handle(request: Request, response: Response) {
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
