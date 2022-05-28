import { Request, Response } from "express";
import { EditUseUseCase } from "./EditUseUseCase";

export class EditControllerRegister {
  constructor(private editUseUseCase: EditUseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    try {
      const resultEdit = await this.editUseUseCase.execute(data);
      return response.status(200).send(resultEdit);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
