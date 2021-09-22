import { RideModel } from '@domain/models/ride'

export interface LoadRideByIdRepository {
  loadById(id: string): Promise<RideModel>
}
