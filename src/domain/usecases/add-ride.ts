import { RideModel } from '@domain/models/ride'

export interface AddRideParams extends Omit< RideModel, 'id'> {}

export interface AddRide {
  add(data: AddRideParams): Promise<RideModel>
}
