import { AddRideParams } from '@domain/usecases/add-ride'
import { RideModel } from '@domain/models/ride'
import { ObjectId } from 'mongodb'

export interface LoadRideByDriverId {
  check(id: ObjectId): Promise<AddRideParams>
}
