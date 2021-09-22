import { RideModel } from './../models/ride'
import { AddRideParams } from '@domain/usecases/add-ride'
import { ObjectId } from 'mongodb'

export interface StopRide {
  stop(id: ObjectId): Promise<RideModel>
}
