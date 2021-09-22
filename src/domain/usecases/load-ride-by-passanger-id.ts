import { AddRideParams } from '@domain/usecases/add-ride'
import { ObjectId } from 'mongodb'

export interface LoadRideByPassangerId {
  check(id: ObjectId): Promise<AddRideParams>
}
