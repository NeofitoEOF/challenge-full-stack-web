import { IListUserDTO } from "./interface/IListUserDTO";
import { unique } from "../../repository/FindByUnique";
import { IListUser } from "./interface/IListUser";
export class ListUseUserCase implements IListUser {
  async execute(data: IListUserDTO) {
    try {
      const listUser = unique.findByUnique(data);
      return listUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
