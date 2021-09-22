import { RideModel } from '@domain/models/ride'
import { ObjectId } from 'mongodb'

export interface LoadRideById {
  loadById(id: ObjectId): Promise<RideModel>
}
