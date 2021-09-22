import { RideModel } from './../../../../domain/models/ride'
import { AddRideParams } from '@domain/usecases/add-ride'

export interface CheckRide {
  check(id: string): Promise<RideModel>
}
