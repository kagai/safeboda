import { DriverModel } from '@domain/models/driver'

export interface AddDriverParams extends Omit< DriverModel, 'id'> {}

export interface AddDriver {
  add(data: AddDriverParams): Promise<DriverModel>
}
