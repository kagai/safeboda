import { LoadRideById } from '@data/interfaces/db/ride/check-ride-by-id'
import { AddRideParams } from '@domain/usecases/add-ride'

export class DbCheckRideById implements LoadRideById {
  constructor(private readonly checkRide: LoadRideById) {}
  async checkRideById(id: string): Promise<AddRideParams> {
    const ride = await this.checkRide.checkRideById(id)
    return ride
  }
}
