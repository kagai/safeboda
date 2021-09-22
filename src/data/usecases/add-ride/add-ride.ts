import { AddRideRepository } from '@data/interfaces/db/ride/add-ride-repository'
import { AddRide, AddRideParams } from '@domain/usecases/add-ride'
import { RideModel } from '@domain/models/ride'

export class DbAddRide implements AddRide {
  constructor(private readonly addRideRepository: AddRideRepository) {}
  async add(data: AddRideParams): Promise<RideModel> {
    const ride = await this.addRideRepository.add(data)
    return ride
  }
}
