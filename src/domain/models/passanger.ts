import { ObjectId } from 'mongodb'

export interface PassangerModel {
  id: ObjectId
  name: string
  phoneNumber: string
}
