import { Request, Response } from "express";
import { IDeleteRegister } from "./interface/IDeleteRegister";

export class DeleteRegisterController {
  constructor(private deleteUseUseCase: IDeleteRegister) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const cpf = request.params.cpf;
    try {
      await this.deleteUseUseCase.execute({ Cpf: cpf });
      return response.status(200).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
