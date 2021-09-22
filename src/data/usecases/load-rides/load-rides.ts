import { LoadRideRepository } from '@data/interfaces/db/ride/load-ride-repository'
import { RideModel } from '@domain/models/ride'
import { LoadRides } from '@domain/usecases/load-rides'

export class DbLoadRide implements LoadRides {
  constructor(private readonly loadRideRepository: LoadRideRepository) {}

  async load(rideStatus?: string): Promise<RideModel[]> {
    const rides = await this.loadRideRepository.loadAll(rideStatus)
    return rides
  }
}
