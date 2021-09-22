import { RideModel } from './../../../domain/models/ride';
import { CheckRide } from '@data/interfaces/db/ride/check-ride'
import { AddRideParams } from '@domain/usecases/add-ride'

export class DbCheckRideById implements CheckRide {
  constructor(private readonly checkRide: CheckRide) {}
  async check(id: string): Promise<RideModel> {
    const ride = await this.checkRide.check(id)
    return ride
  }
}
