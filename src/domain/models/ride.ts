import { ObjectId } from 'mongodb'

export type status = 'ongoing' | 'done'

export interface RideModel {
  id: ObjectId
  passangerId: ObjectId
  driverId: ObjectId
  pickUpPoint: {
    type: [Number, Number]
    index: '2d'
  }
  destinationPoint: {
    type: [Number, Number]
    index: '2d'
  }
  rideStatus: status
}
