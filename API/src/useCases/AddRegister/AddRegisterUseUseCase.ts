import {IAddRegisterDTO } from './IAddRegisterDTO'
import { register } from '../../repository/ormUtilizado';
export class AddRegisterUseUseCase {

  constructor(){}

  async execute(data: IAddRegisterDTO) {
    if(data.Name === null || data.Name === '') throw new Error('Unable to create a blank user')
    if(data.Email === null || data.Email === '') throw new Error('Unable to create a blank email')
    if(data.Cpf === null || data.Cpf === '') throw new Error('Unable to create a blank cpf')
    if(data.RA === null || data.RA === '') throw new Error('Unable to create a blank RA')

    try {
      let createNewUser =  register.findCreater(data);
      return createNewUser;
    } catch (error) {
      throw new Error(error.message)
    }

  }

}