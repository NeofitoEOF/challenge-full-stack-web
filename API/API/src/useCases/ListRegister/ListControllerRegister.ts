import { Request, Response } from "express";
import { IListUser } from "./interface/IListUser";
import { ListUseUserCase } from "./ListUseUseCase";

export class ListUserController {
  constructor(private listUseUserCase: IListUser) {}

  async handle(request: Request, response: Response): Promise<any> {
    const cpf = request.params.cpf;
    try {
      const result = await this.listUseUserCase.execute({ Cpf: cpf });
      return response.status(200).json(result);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
