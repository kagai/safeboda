import { DriverModel } from '@domain/models/driver'
import { ObjectId } from 'mongodb'

export interface LoadDriverById {
  loadById(id: ObjectId): Promise<DriverModel>
}
