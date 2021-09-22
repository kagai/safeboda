import { AddRideParams } from '@domain/usecases/add-ride'
import { RideModel } from '@domain/models/ride'

export interface StopRide {
  stop(id: string): Promise<RideModel>
}
