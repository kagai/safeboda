import { RideModel } from './../../../domain/models/ride';
import { StopRide } from '@data/interfaces/db/ride/stop-ride'
import { AddRideParams } from '@domain/usecases/add-ride'

export class DbStopRideById implements StopRide {
  constructor(private readonly stopRide: StopRide) {}
  async stop(id: string): Promise<RideModel> {
    const ride = await this.stopRide.stop(id)
    return ride
  }
}
