import { Request, Response } from "express";
import { AddRegisterUseUseCase } from "./AddRegisterUseUseCase";

export class AddRegisterUsers {
  constructor(private addRegisterUseUseCase: AddRegisterUseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, ra, cpf } = request.body;
    try {
      await this.addRegisterUseUseCase.execute({
        Name: name,
        Email: email,
        RA: ra,
        Cpf: cpf,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
