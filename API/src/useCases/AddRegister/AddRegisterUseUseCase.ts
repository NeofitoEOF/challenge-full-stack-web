import {IAddRegisterDTO } from './IAddRegisterDTO'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AddRegisterUseUseCase {

  constructor(){}

  async execute(data: IAddRegisterDTO) {
    if(data.Name === null || data.Name === '') throw new Error('Unable to create a blank user')
    if(data.Email === null || data.Email === '') throw new Error('Unable to create a blank email')
    if(data.Cpf === null || data.Cpf === '') throw new Error('Unable to create a blank cpf')
    if(data.RA === null || data.RA === '') throw new Error('Unable to create a blank RA')

    try {
      let createNewUser = await prisma.user.create({
        data: {
          name: data.Name,
          email: data.Email,
          cpf: data.Cpf,
          RA: data.RA
        }
      });
      return createNewUser;
    } catch (error) {
      throw new Error(error.message)
    }

  }

}