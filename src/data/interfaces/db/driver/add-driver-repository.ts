import { DriverModel } from './../../../../domain/models/driver';
import { AddDriverParams } from '@domain/usecases/add-driver'

export interface AddDriverRepository {
  add(driverData: AddDriverParams): Promise<DriverModel>
}
