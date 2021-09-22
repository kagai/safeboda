import { LoadRideByIdRepository } from '@data/interfaces/db/ride/load-ride-by-id-respository'
import { RideModel } from '@domain/models/ride'

export class DbLoadRideById implements LoadRideByIdRepository {
  constructor(
    private readonly loadRideByIdRepository: LoadRideByIdRepository
  ) {}

  async loadById(id: string): Promise<RideModel> {
    const ride = await this.loadRideByIdRepository.loadById(id)
    return ride
  }
}
