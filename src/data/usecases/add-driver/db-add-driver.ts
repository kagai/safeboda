import { DriverModel } from './../../../domain/models/driver'
import { AddDriverRepository } from '@data/interfaces/db/driver/add-driver-repository'
import { AddDriver, AddDriverParams } from '@domain/usecases/add-driver'

export class DbAddDriver implements AddDriver {
  constructor(private readonly addDriverRepository: AddDriverRepository) {}
  async add(data: AddDriverParams): Promise<DriverModel> {
    const adderDriver = await this.addDriverRepository.add(data)
    return adderDriver
  }
}
