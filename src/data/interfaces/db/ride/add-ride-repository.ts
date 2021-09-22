import { AddRideParams } from '@domain/usecases/add-ride'
import { RideModel } from '@domain/models/ride'

export interface AddRideRepository {
  add(rideData: AddRideParams): Promise<RideModel>
}
