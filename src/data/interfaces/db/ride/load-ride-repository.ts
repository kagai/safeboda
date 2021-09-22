import { RideModel } from '@domain/models/ride'

export interface LoadRideRepository {
  loadAll(rideStatus: string): Promise<RideModel[]>
}
