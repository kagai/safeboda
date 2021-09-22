import { RideModel } from '@domain/models/ride'

export interface LoadRides {
  load(rideStatus?: string): Promise<RideModel[]>
}
