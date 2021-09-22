import { AddDriverParams } from '@domain/usecases/add-driver'
import { DriverModel } from '../models/driver'

export const fakeDriverModel: DriverModel = {
  id: 'any_id',
  name: 'any_name',
  phoneNumber: 'any_phoneNumber',
  suspended: false
}

export const fakeDriverParams: Omit<AddDriverParams, 'id'> = {
  name: 'any_name',
  phoneNumber: 'any_phoneNumber',
  suspended: false
}

export const fakeDriverModelArray: DriverModel[] = [
  {
    id: 'any_id',
    name: 'any_name',
    phoneNumber: 'any_phoneNumber',
    suspended: false
  },
  {
    id: 'any_id',
    name: 'any_name',
    phoneNumber: 'any_phoneNumber',
    suspended: false
  }
]
