import { PassangerModel } from './../../../domain/models/passanger'
import { AddPassangerRepository } from '@data/interfaces/db/passangers/add-passanger-repository'
import { AddPassanger, AddPassangerParams } from '@domain/usecases/add-passanger'

export class DbAddPassanger implements AddPassanger {
  constructor(private readonly addPassangerRepository: AddPassangerRepository) {}
  async add(data: AddPassangerParams): Promise<PassangerModel> {
    const passanger = await this.addPassangerRepository.add(data)
    return passanger
  }
}
