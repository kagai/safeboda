import { ObjectId } from 'mongodb'

export interface DriverModel {
  id: ObjectId
  name: string
  phoneNumber: string
  suspended: boolean
}
