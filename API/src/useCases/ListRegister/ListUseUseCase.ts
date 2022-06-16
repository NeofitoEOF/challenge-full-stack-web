import { IListUserDTO } from "./interface/IListUserDTO";
import { unique } from "../../repository/findByUnique";
export class ListUseUserCase {
  constructor() {}

  async execute(data: IListUserDTO) {
    try {
      const listUser = unique.findByUnique(data);
      return listUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
