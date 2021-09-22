import { LoadDriverByIdRepository } from '@data/interfaces/db/driver/load-driver-by-id-respository'
import { DriverModel } from '@domain/models/driver'

export class DbLoadDriverById implements LoadDriverByIdRepository {
  constructor(
    private readonly loadDriverByIdRepository: LoadDriverByIdRepository
  ) {}

  async loadById(id: string): Promise<DriverModel> {
    const driver = await this.loadDriverByIdRepository.loadById(id)
    return driver
  }
}
